import React from 'react';
import { Wrapper, PresentationBlock } from '../../components';

import './Presentation.scss';

const Presentation = () => (
  <section className="presentation">
    <Wrapper>
      <div className="presentation__container">
        <div className="presentation__wrapper">
          <h2 className="presentation__title">Light, Fast & Powerful</h2>
          <p className="presentation__content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="presentation__blocks">
            <PresentationBlock />
            <PresentationBlock />
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
);

export default Presentation;
