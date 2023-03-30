import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import classes from './index.module.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const Checkbox = ({ labelName, register, error }: InputProps) => {
  return (
    <label className={classes.label}>
      <input type="checkbox" {...register} className={classes.input} />
      {labelName}
      {error && <span className={classes.error}>{error.message}</span>}
    </label>
  );
};

export default Checkbox;
