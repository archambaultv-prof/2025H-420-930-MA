import React from 'react';
import styles from "./styles.module.css";

export default function MultipleChoiceOption(props) {
  return (
    <li className={styles.multipleChoiceOption}>
      <input 
        type="radio" 
        name={props.name} 
        id={props.id} 
        value={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className={styles.multipleChoiceLabel}>
        {props.children}
      </label>
    </li>
  );
}