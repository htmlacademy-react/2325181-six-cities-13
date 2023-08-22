import dayjs from 'dayjs';
import { getRatingWidth, isFulfilled, isPending, isRejected } from '../../helper';
import { REVIEW_DATE_FORMAT, MAX_REVIEWS_QUANTITY} from '../../const';
import { useAppSelector } from '../../hooks';
import { selectReviewsStatus, selectReviewsList } from '../../store/reviews/reviews-selectors';

export default function ReviewList (): JSX.Element {
  const reviews = useAppSelector(selectReviewsList);
  const reviewLoadingStatus = useAppSelector(selectReviewsStatus);
  const reviewsSortedSliced = reviews.slice(0).sort((a,b) => dayjs(b.date).diff(dayjs(a.date))).slice(0, MAX_REVIEWS_QUANTITY);
  return (
    <>
      <h2 className="reviews__title">Reviews {reviews.length > 0 && <><span>&middot; </span><span className="reviews__amount">{reviews.length}</span></>}</h2>
      {isPending(reviewLoadingStatus) && <div><span>Reviews loading ...</span></div>}
      {isRejected(reviewLoadingStatus) && <div><span>Failed to load reviews. Try again?</span></div>}
      {isFulfilled(reviewLoadingStatus) && reviewsSortedSliced.length > 0 &&
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
      </ul>}
    </>
  );
}
