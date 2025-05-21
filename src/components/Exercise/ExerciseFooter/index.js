import React from 'react';
import CardFooter from '@site/src/components/Card/CardFooter';

const ExerciseFooter = (props) => {  
  const {children, ...rest} = props; 
  return (
    <CardFooter {...rest} >
      {children}
    </CardFooter>
  );
}
export default ExerciseFooter;