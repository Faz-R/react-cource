import { MutableRefObject } from 'react';
import classes from './index.module.css';

type InputProps = {
  name: string;
  currentRef: MutableRefObject<HTMLInputElement | null>;
  error?: string;
};

const InputText = ({ name, currentRef, error = '' }: InputProps) => {
  return (
    <label className={classes.label}>
      {name}
      <input type="text" ref={currentRef} className={classes.input} />
      <span className={classes.error}>{error}</span>
    </label>
  );
};

export default InputText;
