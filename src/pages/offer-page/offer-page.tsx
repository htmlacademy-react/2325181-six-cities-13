
import { Navigate, useParams } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in';
import PremiumTag from '../../components/premium-tag/premium-tag';
import Review from '../../components/review/review';
import Logo from '../../components/logo/logo';
import ReviewList from '../../components/review-list/review-list';
import { AppPath, AuthorisationStatus, Locations, PremiumPrefix } from '../../const';
import { AuthorisationStatusType, OffersType, ReviewsType } from '../../types/types';
import { getRatingWidth, getOffersCoordinates } from '../../helper';
import MapOffer from '../../components/map-offer/map-offer';
import { CardOffer } from '../../components/card-offer/card-offer';

type OfferPageProps = {
  authorisationStatus: AuthorisationStatusType;
  offers: OffersType;
  reviews: ReviewsType;
};

export default function OfferPage({ authorisationStatus, offers, reviews}: OfferPageProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((place) => place.id === params.id);
  const offerReviews = reviews.filter((review) => review.id === offer?.id);
  const offersCoordinates = getOffersCoordinates(offers);

  if (offer) {
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <SignIn />
            </div>
          </div>
        </header>

        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img className="offer__image" src={image} alt="Photo studio" />
                  </div>))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium && <PremiumTag prefix={PremiumPrefix.Offer} />}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${getRatingWidth(offer.rating)}`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms} Bedroom{offer.bedrooms > 1 && 's'}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} adult{offer.maxAdults > 1 && 's'}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((item) => (
                      <li key={item} className="offer__inside-item">
                        {item}
                      </li>))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">
                      {offer.host.name}
                    </span>
                    <span className="offer__user-status">
                      {offer.host.isPro && 'Pro'}
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews {offerReviews.length > 0 && <><span>&middot; </span><span className="reviews__amount">{offerReviews.length}</span></>}</h2>
                  <ReviewList reviews={offerReviews}/>
                  {authorisationStatus === AuthorisationStatus.Auth && <Review />}
                </section>
              </div>
            </div>
            <MapOffer
              location={Locations.Amsterdam}
              offers={offersCoordinates}
              selectedOfferId={offer.id}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offers.map((nearOffer) =>
                  <CardOffer key={nearOffer.id} offer={nearOffer} />
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
  return <Navigate to={AppPath.NotFound} />;
}
