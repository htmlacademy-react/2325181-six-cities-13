import dayjs from 'dayjs';
import { getRatingWidth } from '../../helper';
import { MAX_REVIEWS_QUANTITY, REVIEW_DATE_FORMAT } from '../../const';
import { ReviewsType } from '../../types/types';

type ReviewListProps = {
  reviews: ReviewsType;
}

export default function ReviewList ({reviews}:ReviewListProps): JSX.Element {
  const reviewsSortedSliced = reviews.slice(0, MAX_REVIEWS_QUANTITY).sort((a,b) => dayjs(b.date).diff(dayjs(a.date)));
  return (
    <ul className="reviews__list">
      {reviewsSortedSliced.map((review) => (
        <li className="reviews__item" key={review.date}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={review.user.avatarUrl}
                width="54"
                height="54"
                alt="Reviews avatar"
              />
            </div>
            <span className="reviews__user-name">
              {review.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: getRatingWidth(review.rating) }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime={review.date}>{dayjs(review.date).format(REVIEW_DATE_FORMAT)}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
