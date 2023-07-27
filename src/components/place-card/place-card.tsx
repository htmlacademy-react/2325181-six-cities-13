import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import PremiumTag from '../premium-tag/premium-tag';
import { AppPath, PremiumPrefix} from '../../const';
import { OfferType } from '../../types/types';
import { getRatingWidth} from '../../helper';

export type PlaceCardProps = {
  offer: OfferType;
  onCardHover?: (id: string) => void;
  onCardLeave?: () => void;
  cardClass: string;
  cardInfoClass: string;
  cardWidth: string;
  cardHeight: string;
}

export function PlaceCard({offer, onCardHover, onCardLeave, cardClass, cardInfoClass, cardHeight, cardWidth}: PlaceCardProps): JSX.Element {
  const ratingWidth = `${getRatingWidth(offer.rating)}`;
  const offerPath = generatePath(AppPath.Offer, {id: offer.id});
  return (
    <article className={classNames(`${cardClass}__card`, 'place-card')} onMouseEnter={() => onCardHover && onCardHover(offer.id)} onMouseLeave={onCardLeave}>
      {offer.isPremium && <PremiumTag prefix={PremiumPrefix.PlaceCard} />}
      <div className={classNames(`${cardClass}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={offerPath}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardWidth}
            height={cardHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
