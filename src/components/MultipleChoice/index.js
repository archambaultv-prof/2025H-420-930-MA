import React, { useId, useState } from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css";

export default function MultipleChoice(props) {
  const uniqueId = useId();
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const multipleChoiceShadow = props.shadow ? `item shadow--${props.shadow}` : "";

  const handleChange = (e) => {
    setSelected(e.target.value);
    setSubmitted(false);
  };

  const allOptions = React.Children.toArray(props.children);
  const options = allOptions.map((child, index) => {
    const optionId = `choice-${uniqueId}-${index}`;
    return React.cloneElement(child, {
      name: `choice-${uniqueId}`,
      id: optionId,
      onChange: handleChange,
      checked: selected === optionId,
    });
  });

  let isAnswerCorrect = false;
  if (selected) {
    const selectedIndex = allOptions.findIndex(
      (_child, index) => `choice-${uniqueId}-${index}` === selected
    );
    if (selectedIndex !== -1) {
      isAnswerCorrect = allOptions[selectedIndex].props.isCorrect;
    }
  }

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  let buttonClassName = clsx('button');
  if (submitted && selected) {
    buttonClassName = clsx(buttonClassName, isAnswerCorrect ? 'button--success' : 'button--danger');
  }
  else {
    buttonClassName = clsx(buttonClassName, 'button--primary');
  }

  const buttonText = submitted ? (isAnswerCorrect ? 'Correct!' : 'Réessayer!') : 'Soumettre';

  return (
    <div className={clsx(props.className, multipleChoiceShadow)} style={props.style}>
      <ol className={styles.multipleChoiceOptions}>
        {options}
      </ol>
      <div>
        <button onClick={handleSubmit} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}