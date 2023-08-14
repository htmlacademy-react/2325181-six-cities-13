
import { useAppSelector } from '../../hooks';
import './error-message.css';
import { selectError } from '../../store/error/error.selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectError);
  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

