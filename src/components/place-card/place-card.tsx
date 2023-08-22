import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import PremiumTag from '../premium-tag/premium-tag';
import { useAppDispatch } from '../../hooks';
import { AppPath, PremiumPrefix, PlaceCardDesign} from '../../const';
import { OfferType, CardClassType } from '../../types/types';
import { getRatingWidth, getUpperCaseType} from '../../helper';
import { setOfferId } from '../../store/offer-details/offer-details-slice';
import FavoritesButton from '../favorites-button/favorites-button';


type PlaceCardProps = {
  offer: OfferType;
  cardClass: CardClassType;
  cardInfoClass: string;
  cardWidth: string;
  cardHeight: string;
}

export function PlaceCard({offer, cardClass, cardInfoClass, cardHeight, cardWidth}: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const ratingWidth = `${getRatingWidth(offer.rating)}`;
  const offerPath = generatePath(AppPath.Offer, {id: offer.id});
  const offerType = getUpperCaseType(offer.type);
  const handleMouseEnter = () => {
    if(cardClass === PlaceCardDesign[AppPath.Main].cardClass) {
      dispatch(setOfferId(offer.id));
    }
  };
  const handleMouseLeave = () => {
    if(cardClass === PlaceCardDesign[AppPath.Main].cardClass) {
      dispatch(setOfferId(''));
    }
  };
  return (
    <article className={classNames(`${cardClass}__card`, 'place-card')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
          {<FavoritesButton offerId={offer.id} isFavorite={offer.isFavorite} isOfferButton={false} />}
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
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
}
