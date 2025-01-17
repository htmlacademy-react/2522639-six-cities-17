import {ReactNode} from 'react';
import Logo from './logo.tsx';
import HeaderNav from './header-nav.tsx';

export default function Header():ReactNode{
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <HeaderNav/>
        </div>
      </div>
    </header>
  );
}
