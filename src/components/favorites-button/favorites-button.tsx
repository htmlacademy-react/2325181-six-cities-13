import classNames from 'classnames';
import { addBookmarkAction } from '../../store/api-actions';
import { favoriteStatusCode } from '../../helper';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { selectAuthorisationStatus } from '../../store/user/user.selectors';
import { AppPath, AuthorisationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';


type FavoritesButtonProps = {
  offerId: string;
  isFavorite: boolean;
};

export default function FavoritesButton({offerId, isFavorite}: FavoritesButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorisationStatus);
  const isAuth = authStatus === AuthorisationStatus.Auth;
  const handleBookmarkClick = () => {
    if (isAuth) {
      dispatch(addBookmarkAction({id: offerId, status: favoriteStatusCode(!isFavorite)}));
    } else {
      dispatch(redirectToRoute(AppPath.Favorites));
    }
  };
  return (
    <button
      className={classNames('place-card__bookmark-button', {'place-card__bookmark-button--active': isFavorite}, 'button')}
      onClick={handleBookmarkClick}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );

}
