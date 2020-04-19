import React from 'react';
import { useField } from 'formik';

import styles from './Input.module.scss';

export interface InputProps {
  textarea?: boolean,
  label: string,
  name: string,
  [key: string]: any;
}

const Input = ({textarea, label, name, ...props}: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={props.id || name}>{label}</label>
      {meta.touched && meta.error ? (
        <p className={styles.error}>{meta.error}</p>
      ) : null}
      {textarea
       ? <textarea className={styles.input} name={name} {...field} {...props} />
       : <input className={styles.input} name={name} {...field} {...props} />
      }
    </div>
  )
};

export default Input;
