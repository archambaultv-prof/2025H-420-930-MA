import React from 'react';
import CardBody from '@site/src/components/Card/CardBody';

const ExerciseBody = (props) => {
  const {children, ...rest} = props;
  return (
    <CardBody {...rest} >
      {children}
    </CardBody>
  );
}
export default ExerciseBody;