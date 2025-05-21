// Very similar to a Card component

import React, { CSSProperties } from 'react'; 
import Card from '@site/src/components/Card';

const Exercise = (props) => {
  const {shadow, children, ...rest} = props;
  const cardShadow = shadow ? `item shadow--${shadow}` : `item shadow--md`;
  return (
    <Card {...rest} shadow={cardShadow}>
        {children}
    </Card>
  );
};
export default Exercise;
