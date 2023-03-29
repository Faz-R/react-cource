import { MutableRefObject } from 'react';
import classes from './index.module.css';

type SelectProps = {
  name: string;
  options: string[];
  currentRef: MutableRefObject<HTMLSelectElement | null>;
  error?: string;
};

const Select = ({ name, options, currentRef, error = '' }: SelectProps) => {
  return (
    <label className={classes.label}>
      {name}
      <select ref={currentRef} className={classes.select}>
        {options.map((option) => {
          return (
            <option value={option} className={classes.option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      <span className={classes.error}>{error}</span>
    </label>
  );
};

export default Select;
