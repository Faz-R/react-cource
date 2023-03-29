import { MutableRefObject } from 'react';
import classes from './index.module.css';

type FileProps = {
  name: string;
  currentRef: MutableRefObject<HTMLInputElement | null>;
  error?: string;
};

const File = ({ name, currentRef, error = '' }: FileProps) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>
        {name}
        <input type="file" ref={currentRef} className={classes.input} />
      </label>
      <span className={classes.error}>{error}</span>
    </div>
  );
};

export default File;
