import React, { MutableRefObject } from 'react';
import classes from './index.module.css';

type CheckboxProps = {
  name: string;
  currentRef: MutableRefObject<HTMLInputElement | null>;
  // checked?: boolean;
  // onChange: (e: boolean, i: string) => void;
};

const Checkbox = ({ name, currentRef }: CheckboxProps) => {
  return (
    <label className={classes.label}>
      <input type="checkbox" ref={currentRef} className={classes.input} />
      {name}
    </label>
  );
};

export default Checkbox;
