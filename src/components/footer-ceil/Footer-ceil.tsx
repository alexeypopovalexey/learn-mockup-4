import React from 'react';
import { Button } from '../button';

import './Footer-ceil.scss';

const FooterCeil = () => (
  <div className="footer__ceil">
    <div className="footer__ceil--copypast">©2020 Yourcompany</div>
    <div className="footer__ceil--logo">Landie</div>
    <Button title="footer" text="Purchase now" />
  </div>
);

export default FooterCeil;
