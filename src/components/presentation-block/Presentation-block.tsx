import React from 'react';
import { PresentationIcon } from '../../assets/image';

import './Presentation-block.scss';

const PresentationBlock = () => (
  <div className="presentation__block">
    <PresentationIcon className="presentation__block--icon" />
    <h3 className="presentation__block--title">Title Goes Here</h3>
    <p className="presentation__block--content">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor.
    </p>
  </div>
);

export default PresentationBlock;
