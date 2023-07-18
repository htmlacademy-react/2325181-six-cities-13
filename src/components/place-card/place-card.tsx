import { Link } from 'react-router-dom';
import { AppPath, PlaceCardDesign, CardFormat} from '../../const';
import { OfferType } from '../../types/types';

type PlaceCardProps = {
  offer: OfferType;
  cardFormat: keyof typeof CardFormat;
  onCardHover?: () => void;
  onCardLeave?: () => void;
}

function PremiumTag ({isPremium}: {isPremium: boolean}): React.ReactNode {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>);
  }
}

export default function PlaceCard({offer, cardFormat, onCardHover, onCardLeave}: PlaceCardProps): JSX.Element {
  const ratingWidth = `${offer.rating * 20}%`;

  return (
    <article className={`${PlaceCardDesign[cardFormat].cardClass}__card place-card`} onMouseEnter={onCardHover} onMouseLeave={onCardLeave}>
      <PremiumTag isPremium={offer.isPremium} />
      <div className={`${PlaceCardDesign[cardFormat].cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppPath.Offer}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={PlaceCardDesign[cardFormat].cardWidth}
            height={PlaceCardDesign[cardFormat].cardHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${PlaceCardDesign[cardFormat].cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
