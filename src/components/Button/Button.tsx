import React from 'react';

import Loader from '../Loader/Loader';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: any,
  disabled?: boolean,
  loading?: boolean,
  [key: string]: any;
}

const Button = ({children, disabled, loading, ...props}: ButtonProps) => {
  return (
    <button className={styles.button} disabled={disabled || loading} {...props}>
      {loading ? <Loader /> : children}
    </button>
  )
};

export default Button;
