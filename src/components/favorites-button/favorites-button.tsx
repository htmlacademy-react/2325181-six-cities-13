import classNames from 'classnames';
import { addBookmarkAction } from '../../store/api-actions';
import { selectAuthorisationStatus } from '../../store/user/user-selectors';
import { redirectToRoute } from '../../store/action';
import { useAppDispatch, useAppSelector} from '../../hooks/hooks';
import { AppPath, AuthorisationStatus, FavoritesButtonSizes } from '../../const';
import { getFavoriteStatusCode } from '../../helper';


type FavoritesButtonProps = {
  offerId: string;
  isFavorite: boolean;
  isOfferButton: boolean;
};

export default function FavoritesButton({offerId, isFavorite, isOfferButton}: FavoritesButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorisationStatus);
  const isAuth = authStatus === AuthorisationStatus.Auth;
  const handleBookmarkClick = () => {
    if (isAuth) {
      dispatch(addBookmarkAction({id: offerId, status: getFavoriteStatusCode(!isFavorite)}));
    } else {
      dispatch(redirectToRoute(AppPath.Login));
    }
  };
  return (
    <button
      className={classNames({
        'place-card__bookmark-button': !isOfferButton,
        'offer__bookmark-button': isOfferButton
      },
      {
        'place-card__bookmark-button--active': isFavorite && !isOfferButton,
        'offer__bookmark-button--active': isFavorite && isOfferButton
      }, 'button')}
      onClick={handleBookmarkClick}
      type="button"
    >
      <svg
        className={classNames({
          'place-card__bookmark-icon': !isOfferButton,
          'offer__bookmark-icon': isOfferButton
        })}
        width={isOfferButton ?
          FavoritesButtonSizes.Width.offerButton :
          FavoritesButtonSizes.Width.notOfferButton}
        height={isOfferButton ?
          FavoritesButtonSizes.Height.offerButton :
          FavoritesButtonSizes.Height.notOfferButton}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );

}
