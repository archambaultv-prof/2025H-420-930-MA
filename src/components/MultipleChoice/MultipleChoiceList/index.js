import React from 'react';
import MultipleChoiceSeparator from './MultipleChoiceSeparator';

export default function MultipleChoiceList(props) {
  const children = React.Children.toArray(props.children);
  return (
    <div>
      <ol>
        {children.map((child, index) => (
          <React.Fragment key={index}>
            <li>
              {child}
            </li>
            {index < children.length - 1 && <MultipleChoiceSeparator />}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
}