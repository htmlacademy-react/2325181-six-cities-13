import { Link} from 'react-router-dom';
import classNames from 'classnames';
import { LogoSizes, AppPath } from '../../const';

type LogoProps = {
  isFooterLogo?: boolean;
}

export default function Logo ({isFooterLogo}: LogoProps): JSX.Element {
  return (
    <Link
      className={classNames({
        'header__logo-link': !isFooterLogo,
        'footer__logo-link': isFooterLogo
      })}
      to={AppPath.Main}
    >
      <img
        className={classNames({
          'footer__logo': isFooterLogo,
          'header__logo' : !isFooterLogo
        })}
        src="img/logo.svg"
        alt="6 cities logo"
        width={isFooterLogo ? LogoSizes.Width.footer : LogoSizes.Width.header}
        height={isFooterLogo ? LogoSizes.Height.footer : LogoSizes.Height.header}
      />
    </Link>
  );
}
