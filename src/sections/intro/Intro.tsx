import React from 'react';
import { Wrapper, Button } from '../../components';

import './Intro.scss';

const Intro = () => (
  <section className="intro">
    <Wrapper>
      <div className="intro__container">
        <h1 className="intro__title">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className="intro__content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="intro__btn--wrapper">
          <Button title="intro" text="Purchase UI Kit" />
          <Button title="intro" text="Learn More" />
        </div>
      </div>
    </Wrapper>
  </section>
);

export default Intro;
