import { MutableRefObject } from 'react';
import classes from './index.module.css';

type RadioProps = {
  label: string;
  name: string;
  id: string;
  currentRef: MutableRefObject<HTMLInputElement | null>;
};

const Radio = ({ label, name, id, currentRef }: RadioProps) => {
  return (
    <label className={classes.label}>
      <span className={classes.text}>{label}</span>
      <input type="radio" ref={currentRef} name={name} id={id} className={classes.input} />
    </label>
  );
};

export default Radio;
