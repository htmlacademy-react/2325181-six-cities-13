type LogoProps = {
  isFooterLogo?: boolean;
}

export default function Logo ({isFooterLogo}: LogoProps): JSX.Element {
  return (
    <img
      className={`${isFooterLogo ? 'footer' : 'header'}__logo`}
      src="img/logo.svg"
      alt="6 cities logo"
      width={isFooterLogo ? '64' : '81'}
      height={isFooterLogo ? '33' : '41'}
    />
  );
}
