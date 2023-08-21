import classNames from 'classnames';
import { redirectToRoute } from '../../store/action';
import { addBookmarkAction } from '../../store/api-actions';
import { selectAuthorisationStatus } from '../../store/user/user.selectors';
import { selectOfferDetails, } from '../../store/offer-details/offer-details.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorisationStatus, AppPath} from '../../const';
import {favoriteStatusCode } from '../../helper';

export default function BookmarkButton (): JSX.Element {
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  const isAuth = authorisationStatus === AuthorisationStatus.Auth;
  const activeOffer = useAppSelector(selectOfferDetails);
  const handleBookmarkClick = () => {
    if (isAuth) {
      dispatch(addBookmarkAction({id: activeOffer?.id as string, status: favoriteStatusCode(!activeOffer?.isFavorite)}));
    } else {
      dispatch(redirectToRoute(AppPath.Favorites));
    }
  };
  return (
    <button
      className={classNames('offer__bookmark-button', {'offer__bookmark-button--active': activeOffer?.isFavorite}, 'button')}
      onClick={handleBookmarkClick}
      type="button"
    >
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
