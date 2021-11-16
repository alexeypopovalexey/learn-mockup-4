import React from 'react';
import { Wrapper, FooterCeil, Subfooter } from '../../components';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <Wrapper>
      <FooterCeil />
      <Subfooter />
    </Wrapper>
  </footer>
);

export default Footer;
