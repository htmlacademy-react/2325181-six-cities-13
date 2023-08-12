
import { Helmet } from 'react-helmet-async';
import PremiumTag from '../../components/premium-tag/premium-tag';
import Review from '../../components/review/review';
import ReviewList from '../../components/review-list/review-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorisationStatus, PremiumPrefix, } from '../../const';
import { getRatingWidth, isRejected, isFulfilled, isPending } from '../../helper';
import MapOffer from '../../components/map-offer/map-offer';
import { NearbyList } from '../../components/nearby-list/nearby-list';
import { selectAuthorisationStatus, selectOfferDetails, selectOffersNearby, selectOfferStatus} from '../../selectors';
import {useEffect} from 'react';
import LoadingPage from '../loading-page/loading-page';
import { loadOfferDetailsAction, loadOffersNearbyAction, loadReviewsListAction } from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';
import { useParams } from 'react-router-dom';


export default function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useParams().id as string;
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  useEffect(() => {
    dispatch(loadOfferDetailsAction(offerId));
    dispatch(loadOffersNearbyAction(offerId));
    dispatch(loadReviewsListAction(offerId));

  }, [offerId, dispatch]);
  const activeOffer = useAppSelector(selectOfferDetails);
  const offersNearby = useAppSelector(selectOffersNearby);
  const offerLoadingStatus = useAppSelector(selectOfferStatus);
  return (
    <>
      {isPending(offerLoadingStatus) && <LoadingPage />}
      {isRejected(offerLoadingStatus) && <NotFoundPage />}
      {isFulfilled(offerLoadingStatus) && activeOffer !== null &&
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
                  <ReviewList/>
                  {authorisationStatus === AuthorisationStatus.Auth && <Review />}
                </section>
              </div>
            </div>
            <MapOffer />
          </section>
          <div className="container">
            <NearbyList offers={offersNearby} />
          </div>
        </main>
      </div>}
    </>
  );
}


