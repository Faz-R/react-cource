import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import classes from './index.module.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const InputDate = ({ labelName, register, error }: InputProps) => {
  return (
    <label className={classes.label}>
      {labelName}
      <input {...register} type="date" className={classes.input} />
      {error && <span className={classes.error}>{error.message}</span>}
    </label>
  );
};

export default InputDate;
