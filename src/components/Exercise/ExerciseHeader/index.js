import React from 'react';
import CardHeader from '@site/src/components/Card/CardHeader';

const ExerciseHeader = (props) => {
  const {children, ...rest} = props;
  return (
    <CardHeader {...rest}>
      {children}
    </CardHeader>
  );
}
export default ExerciseHeader;