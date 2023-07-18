import { Fragment, useState } from 'react';
import {REVIEW_TEXT_MIN_LENGTH, StarRatings} from '../../const';


export default function Review ():JSX.Element {
  const [reviewText, setReviewText] = useState('');
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {StarRatings.map(
          ({star, description}) => {
            const inputId = `${star}-stars`;
            return (
              <Fragment key={star}>
                <input className="form__rating-input visually-hidden" name="rating" value={star} id={inputId} type="radio"/>
                <label htmlFor={inputId} className="reviews__rating-label form__rating-label" title={description}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
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
        minLength={REVIEW_TEXT_MIN_LENGTH}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
