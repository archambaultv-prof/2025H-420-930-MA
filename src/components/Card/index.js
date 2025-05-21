// Taken from https://docusaurus.community/knowledge/component-library/new/Card/

import React, { CSSProperties } from 'react'; 
import clsx from 'clsx';

const Card = ({
  className, // Custom classes for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  shadow, // Used to add shadow under your card. Expected values are: low (lw), medium (md), tall (tl)
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    <div className={clsx('card', className, cardShadow)} style={style}>
      {children}
    </div>
  );
};
export default Card;
