import { Fragment, useState, FormEvent, useEffect} from 'react';
import {FormValidation, StarRatings} from '../../const';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { isFulfilled, isValidForm } from '../../helper';
import { selectReviewPostingStatus } from '../../selectors';
import { ReviewFormType } from '../../types/types';
import { idleReviewPostingStatus } from '../../store/action';

export default function Review ():JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useParams().id as string;
  const reviewPostingStatus = useAppSelector(selectReviewPostingStatus);
  const [isBlockedForm, setIsBlockedForm] = useState<boolean>(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false);
  const [reviewForm, setReviewForm] = useState<ReviewFormType>({
    id: offerId,
    comment: '',
    rating: 0
  });
  useEffect(() => {
    if (isSubmitClicked) {
      dispatch(postReviewAction(reviewForm));
      setReviewForm({
        id: offerId,
        comment: '',
        rating: 0
      });
    }
    if (isFulfilled(reviewPostingStatus)) {
      setIsBlockedForm(false);
      dispatch(idleReviewPostingStatus());
    }
    return () => {

      setIsSubmitClicked(false);
    };
  }, [isSubmitClicked, dispatch, offerId, reviewForm, reviewPostingStatus]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isValidForm(reviewForm.comment, reviewForm.rating)) {
      setReviewForm({...reviewForm,
        comment: reviewForm.comment,
        rating: reviewForm.rating
      });
      setIsBlockedForm(true);
      setIsSubmitClicked(true);
    }
  };
  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarRatings.map(
          ({star, description}) => {
            const inputId = `${star}-stars`;
            const isChecked = star === reviewForm.rating;
            return (
              <Fragment key={star}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  onChange={(evt) => {
                    setReviewForm({...reviewForm, rating: Number(evt.target.value)});
                  }}
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
        id="review" value={reviewForm.comment}
        onChange={(evt) => setReviewForm({...reviewForm, comment: evt.target.value})}
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
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidForm(reviewForm.comment, reviewForm.rating) || isBlockedForm}>Submit</button>
      </div>
    </form>
  );
}
