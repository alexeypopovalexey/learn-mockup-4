import React from 'react';

import './Button.scss';

interface IPropsBtn {
  title: string;
  text: string;
}

const Button = (props: IPropsBtn) => {
  const { title, text } = props;
  return (
    <button type="button" className={`button button__${title}`}>
      {text}
    </button>
  );
};

export default Button;
