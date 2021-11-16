import React from 'react';
import { Wrapper, Nav, Button } from '../../components';

import './Header.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__container">
        <Nav />
        <div className="header__logo">Landie</div>
        <Button title="header-btn" text="Buy Now" />
      </div>
    </Wrapper>
  </header>
);

export default Header;
