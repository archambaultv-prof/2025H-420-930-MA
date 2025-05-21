import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function MultipleChoiceList(props) {
  const children = React.Children.toArray(props.children);
  return (
    <Tabs>
        {children.map((child, index) => (
            <TabItem value={"Q" + (index + 1)} label={"Q" + (index + 1)}>
              {child}
            </TabItem>
        ))}
    </Tabs>
  );
}