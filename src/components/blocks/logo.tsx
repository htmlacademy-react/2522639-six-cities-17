import cn from 'classnames';
import { Path, TypesPage } from '../../constants';
import { TypesPageEnum } from '../../types/alltypes';
import { Link } from 'react-router-dom';

type LogoProps = {
  typesPage: TypesPageEnum;
  isFooter?: boolean;
};

const LOGO_SIZE = {
  Header: { Width: 81, Height: 41 },
  Footer: { Width: 81, Height: 41 },
};

function Logo({ typesPage, isFooter = false }: LogoProps): JSX.Element {
  const isMainPageHeader = !isFooter && typesPage === TypesPage.Main;

  return (
    <Link
      className={cn({
        'header__logo-link': !isFooter,
        'header__logo-link--active': isMainPageHeader,
        'footer__logo-link': isFooter,
      })}
      to={Path.Root}
    >
      <img
        className={cn({
          'header__logo': !isFooter,
          'footer__logo': isFooter,
        })}
        src="img/logo.svg"
        alt="6 cities logo"
        width={LOGO_SIZE[isFooter ? 'Footer' : 'Header'].Width}
        height={LOGO_SIZE[isFooter ? 'Footer' : 'Header'].Height}
      />
    </Link>
  );
}

export default Logo;

