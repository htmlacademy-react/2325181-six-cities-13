import classNames from 'classnames';
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PremiumTag from '../../components/premium-tag/premium-tag';
import Review from '../../components/review/review';
import ReviewList from '../../components/review-list/review-list';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import MapOffer from '../../components/map-offer/map-offer';
import NearbyList from '../../components/nearby-list/nearby-list';
import FavoritesButton from '../../components/favorites-button/favorites-button';
import { loadOfferDetailsAction, loadOffersNearbyAction, loadReviewsListAction } from '../../store/api-actions';
import { resetReviewData } from '../../store/comment/comment-slice';
import { selectOfferDetails, selectOfferStatus } from '../../store/offer-details/offer-details-selectors';
import { selectAuthorisationStatus } from '../../store/user/user-selectors';
import { setOfferId } from '../../store/offer-details/offer-details-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AuthorisationStatus, PremiumPrefix} from '../../const';
import { getRatingWidth, isRejected, isFulfilled, isPending, getUpperCase, getPlural } from '../../helper';


export default function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useParams().id as string;
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  const isAuth = authorisationStatus === AuthorisationStatus.Auth;
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(resetReviewData());
      dispatch(setOfferId(offerId));
      dispatch(loadOfferDetailsAction(offerId));
      dispatch(loadOffersNearbyAction(offerId));
      dispatch(loadReviewsListAction(offerId));
    }
    return () => {
      isMounted = false;
    };
  }, [offerId, dispatch]);
  const activeOffer = useAppSelector(selectOfferDetails);
  const offerLoadingStatus = useAppSelector(selectOfferStatus);
  return (
    <>
      {isPending(offerLoadingStatus) && <LoadingPage />}
      {isRejected(offerLoadingStatus) && <NotFoundPage />}
      {isFulfilled(offerLoadingStatus) && activeOffer !== null &&
      <div className="page" data-testid="offer page element">
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
                  <FavoritesButton offerId={activeOffer.id} isFavorite={activeOffer.isFavorite} isOfferButton />
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
                    {getUpperCase(activeOffer.type)}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {activeOffer.bedrooms} {getPlural('Bedroom', activeOffer.bedrooms)}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {activeOffer.maxAdults} {getPlural('adult', activeOffer.maxAdults)}
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
                    <div className={classNames('offer__avatar-wrapper', {
                      'offer__avatar-wrapper--pro': activeOffer.host.isPro,
                      'user__avatar-wrapper': !activeOffer.host.isPro})}
                    >
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
                    {activeOffer.host.isPro &&
                    <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {activeOffer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <ReviewList/>
                  {isAuth && <Review />}
                </section>
              </div>
            </div>
            <MapOffer />
          </section>
          <div className="container">
            <NearbyList />
          </div>
        </main>
      </div>}
    </>
  );
}
