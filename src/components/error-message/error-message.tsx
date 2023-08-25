
import { useAppSelector } from '../../hooks';
import { selectError } from '../../store/error/error-selectors';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectError);
  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

