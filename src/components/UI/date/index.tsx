import React, { MutableRefObject } from 'react';
import classes from './index.module.css';

type DateProps = {
  name: string;
  currentRef: MutableRefObject<HTMLInputElement | null>;
  error?: string;
};

const Date = ({ name, currentRef, error = '' }: DateProps) => {
  return (
    <label className={classes.label}>
      {name}
      <input type="date" ref={currentRef} className={classes.input} />
      <span className={classes.error}>{error}</span>
    </label>
  );
};

export default Date;
