import React, { useState } from 'react';

import './Nav.scss';

const Nav = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const handelBurger = (): void => {
    setActiveBurger(!activeBurger);
  };
  return (
    <nav className="nav">
      <button className="burger__btn" type="button" onClick={handelBurger}>
        <span className="burger__line"> </span>
      </button>
      <ul
        className={`nav__list ${
          activeBurger ? 'visibile-burger' : 'disactive-burger'
        }`}
      >
        <li className="nav__elem">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__elem">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__elem nav__elem--last">
          <a href="#" className="nav__link ">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
