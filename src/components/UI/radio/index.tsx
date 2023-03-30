import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import classes from './index.module.css';

type RadioProps = {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  value: string;
};

const Radio = ({ labelName, register, value }: RadioProps) => {
  return (
    <label className={classes.label}>
      <span className={classes.text}>{labelName}</span>
      <input type="radio" {...register} value={value} className={classes.input} />
    </label>
  );
};

export default Radio;
