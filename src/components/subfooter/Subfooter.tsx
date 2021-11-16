import React from 'react';
import {
  FacebookIcon,
  LinkidinIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from '../../assets/image';

import './Subfooter.scss';

const Subfooter = () => (
  <div className="footer__subfooter">
    <ul className="footer__subfooter--nav footer__nav">
      <li className="footer__nav--elem">
        <a href="#" className="footer__nav--link">
          Home
        </a>
      </li>
      <li className="footer__nav--elem">
        <a href="#" className="footer__nav--link">
          About
        </a>
      </li>
      <li className="footer__nav--elem">
        <a href="#" className="footer__nav--link">
          Contact
        </a>
      </li>
    </ul>
    <ul className="footer__networks--list">
      <li className="footer__networks--elem">
        <a
          href="https://www.facebook.com/#"
          className="footer__networks--link"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </li>
      <li className="footer__networks--elem">
        <a
          href="https://www.linkedin.com/"
          className="footer__networks--link"
          target="_blank"
          rel="noreferrer"
        >
          <LinkidinIcon />
        </a>
      </li>
      <li className="footer__networks--elem">
        <a
          href="https://twitter.com/?lang=en"
          className="footer__networks--link"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
      <li className="footer__networks--elem">
        <a
          href="https://www.youtube.com/"
          className="footer__networks--link"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon />
        </a>
      </li>
      <li className="footer__networks--elem">
        <a
          href="https://www.instagram.com/"
          className="footer__networks--link"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  </div>
);

export default Subfooter;
