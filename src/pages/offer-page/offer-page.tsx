import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import PremiumTag from '../../components/premium-tag/premium-tag';
import Review from '../../components/review/review';
import ReviewList from '../../components/review-list/review-list';
import { useAppSelector } from '../../hooks';
import { AppPath, AuthorisationStatus, PremiumPrefix } from '../../const';
import { getRatingWidth } from '../../helper';
import MapOffer from '../../components/map-offer/map-offer';
import { NearbyList } from '../../components/nearby-list/nearby-list';
import { selectAuthorisationStatus, selectDataLoadingStatus, selectOfferDetails, selectReviewsList, selectOffersNearby } from '../../selectors';
import LoadingPage from '../loading-page/loading-page';


export default function OfferPage(): JSX.Element {
  const activeOffer = useAppSelector(selectOfferDetails);
  const offerReviews = useAppSelector(selectReviewsList);
  const offersNearby = useAppSelector(selectOffersNearby);
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  const isDataLoading = useAppSelector(selectDataLoadingStatus);
  if (isDataLoading) {
    return <LoadingPage />;
  }
  if (!activeOffer) {
    return <Navigate to={AppPath.NotFound} />;
  }
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. {activeOffer.title}</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {activeOffer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {activeOffer.isPremium && <PremiumTag prefix={PremiumPrefix.Offer} />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {activeOffer.title}
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
                  <span style={{ width: `${getRatingWidth(activeOffer.rating)}`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{activeOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {activeOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {activeOffer.bedrooms} Bedroom{activeOffer.bedrooms > 1 && 's'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {activeOffer.maxAdults} adult{activeOffer.maxAdults > 1 && 's'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{activeOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {activeOffer.goods.map((item) => (
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
                      src={activeOffer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {activeOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {activeOffer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {activeOffer.description}
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
            offers={offersNearby}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">{offersNearby.length === 0 && 'No '}Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearbyList offers={offersNearby} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
