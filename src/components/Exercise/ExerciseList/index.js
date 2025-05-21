import React from 'react';
import ExerciseSeparator from './ExerciseSeparator';

export default function ExerciseList(props) {
  const children = React.Children.toArray(props.children);
  return (
    <div>
        {children.map((child, index) => (
          <React.Fragment key={index}>
              {child}
            {index < children.length - 1 && <ExerciseSeparator />}
          </React.Fragment>
        ))}
    </div>
  );
}