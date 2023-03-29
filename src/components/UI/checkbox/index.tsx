import { MutableRefObject } from 'react';
import classes from './index.module.css';

type CheckboxProps = {
  name: string;
  currentRef: MutableRefObject<HTMLInputElement | null>;
  error?: string;
};

const Checkbox = ({ name, currentRef, error = '' }: CheckboxProps) => {
  return (
    <label className={classes.label}>
      <input type="checkbox" ref={currentRef} className={classes.input} />
      {name}
      <span className={classes.error}>{error}</span>
    </label>
  );
};

export default Checkbox;
