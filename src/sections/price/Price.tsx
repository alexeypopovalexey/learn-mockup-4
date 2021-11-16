import React from 'react';
import { Wrapper, Button } from '../../components';

import './Price.scss';

const Price = () => (
  <section className="price">
    <Wrapper>
      <div className="price__container">
        <h2 className="price__title">A Price To Suit Everyone</h2>
        <span className="price__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{' '}
        </span>
        <h3 className="price__pricename">$40</h3>
        <h4 className="price__subtitle">UI Design Kit</h4>
        <h5 className="price__comment">See, One price. Simple.</h5>
        <Button title="price" text="Purchase Now" />
      </div>
    </Wrapper>
  </section>
);

export default Price;
