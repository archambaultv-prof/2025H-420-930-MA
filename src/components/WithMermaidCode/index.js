import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Mermaid from '@theme/Mermaid';
import CodeBlock from '@theme/CodeBlock';

export default function WithMermaidCode({ code }) {
  const withFence = "```mermaid\n" + code.trim() + "\n```";
  return (
    <Tabs>
      <TabItem value="diagramme" label="Diagramme">
        <Mermaid value={code} />
      </TabItem>
      <TabItem value="code" label="Code">
        <CodeBlock language="markdown">{withFence}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}