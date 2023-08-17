import classNames from 'classnames';
import { addBookmarkAction } from '../../store/api-actions';
import { favoriteStatusCode } from '../../helper';
import { useAppDispatch} from '../../hooks';

type FavoritesButtonProps = {
  offerId: string;
  isFavorite: boolean;
};

export default function FavoritesButton({offerId, isFavorite}: FavoritesButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleBookmarkClick = () => {
    dispatch(addBookmarkAction({id: offerId, status: favoriteStatusCode(!isFavorite)}));
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
