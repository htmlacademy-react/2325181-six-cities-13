import { Fragment, useState, ChangeEvent, FormEvent} from 'react';
import {FormValidation, StarRatings} from '../../const';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { isFulfilled, isValidForm } from '../../helper';
import { selectReviewPostingStatus } from '../../selectors';

export default function Review ():JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useParams().id;
  const [isBlockedForm, setIsBlockedForm] = useState<boolean>(false);
  const [reviewRating, setReviewRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const reviewPostingStatus = useAppSelector(selectReviewPostingStatus);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const {value} = evt.target as HTMLInputElement;
    setReviewRating(Number(value));
    console.log(reviewRating, value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (offerId && isValidForm(reviewText, reviewRating)) {
      const reviewForm = {
        id: offerId,
        comment: reviewText,
        rating: reviewRating
      };
      setIsBlockedForm(true);
      dispatch(postReviewAction(reviewForm));
      setReviewRating(0);
      setReviewText('');
    }
  };

  if (isFulfilled(reviewPostingStatus)) {
    setIsBlockedForm(false);
  }
  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarRatings.map(
          ({star, description}) => {
            const inputId = `${star}-stars`;
            const isChecked = star === reviewRating;
            return (
              <Fragment key={star}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  onChange={handleRatingChange}
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
        id="review" value={reviewText}
        onChange={(evt) => setReviewText(evt.target.value)}
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
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidForm(reviewText, reviewRating) || isBlockedForm}>Submit</button>
      </div>
    </form>
  );
}
