import { Fragment, FormEvent} from 'react';
import { useParams } from 'react-router-dom';
import { postReviewAction } from '../../store/api-actions';
import { selectCommentPostingStatus, selectReviewComment, selectReviewRating } from '../../store/comment/comment-selectors';
import { setStatusIdle, setReviewRating, setReviewComment } from '../../store/comment/comment-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {ErrorMessage, FormValidation, StarRatings} from '../../const';
import { processErrorHandle } from '../../services/process-error-handle';
import { isValidForm, isPending, isRejected } from '../../helper';

export default function Review ():JSX.Element {
  const dispatch = useAppDispatch();

  const offerId = useParams().id as string;
  const rating = useAppSelector(selectReviewRating);
  const comment = useAppSelector(selectReviewComment);
  const reviewPostingStatus = useAppSelector(selectCommentPostingStatus);
  const isButtonDisabled = !isValidForm(comment, rating) || isPending(reviewPostingStatus);
  const isBlockedForm = isPending(reviewPostingStatus);
  if (isRejected(reviewPostingStatus)) {
    processErrorHandle(ErrorMessage.FailedPostReview);
    dispatch(setStatusIdle());
  }
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isValidForm(comment, rating)) {
      dispatch(postReviewAction({
        id: offerId,
        comment,
        rating
      }));
    }
  };
  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarRatings.map(
          ({star, description}) => {
            const inputId = `${star}-stars`;
            const isChecked = star === rating;
            return (
              <Fragment key={star}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  onChange={(evt) => dispatch(setReviewRating(Number(evt.target.value)))}
                  value={star}
                  id={inputId}
                  type="radio"
                  checked={isChecked}
                  disabled={isBlockedForm}
                />
                <label htmlFor={inputId} className="reviews__rating-label form__rating-label" title={description}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </Fragment>
            );
          }
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" value={comment}
        onChange={(evt) => dispatch(setReviewComment(evt.target.value))}
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={FormValidation.MinLength}
        maxLength={FormValidation.MaxLength}
        disabled={isBlockedForm}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}
