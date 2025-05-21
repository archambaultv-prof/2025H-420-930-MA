import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';
import WithMermaidCode from '@site/src/components/WithMermaidCode';
import Exercise from '@site/src/components/Exercise';
import ExerciseBody from '@site/src/components/Exercise/ExerciseBody';
import ExerciseFooter from '@site/src/components/Exercise/ExerciseFooter';
import ExerciseHeader from '@site/src/components/Exercise/ExerciseHeader';
import ExerciseList from '@site/src/components/Exercise/ExerciseList';
import MultipleChoice from '@site/src/components/MultipleChoice';
import MultipleChoiceList from '@site/src/components/MultipleChoice/MultipleChoiceList';
import MultipleChoiceOption from '@site/src/components/MultipleChoice/MultipleChoiceOption';
import MultipleChoiceTabs from '@site/src/components/MultipleChoice/MultipleChoiceTabs';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Tabs,
  TabItem,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardImage,
  WithMermaidCode,
  Exercise,
  ExerciseBody,
  ExerciseFooter,
  ExerciseHeader,
  ExerciseList,
  MultipleChoice,
  MultipleChoiceList,
  MultipleChoiceOption,
  MultipleChoiceTabs
};