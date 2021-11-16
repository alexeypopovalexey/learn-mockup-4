/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from '../button';

import './Content-block.scss';

interface IPropsContentBlock {
  myIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  withBTN: boolean;
  index: number;
}

const ContentBlock = (props: IPropsContentBlock) => {
  const { myIcon, withBTN, index } = props;
  return (
    <div className={`content__block content__block--${index}`}>
      <div className="content__block--image">{myIcon}</div>
      <div className="content__block--content">
        <h2 className="content__block--title">Light, Fast & Powerful</h2>
        <p className="content__block--text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div
          className={`content__block--btn ${
            withBTN ? ' ' : 'content__none--btn'
          }`}
        >
          <Button text="Purchase Now" title="content" />
        </div>
      </div>
    </div>
  );
};
export default ContentBlock;
