import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import classes from './index.module.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const InputText = ({ labelName, register, error }: InputProps) => {
  return (
    <label className={classes.label}>
      {labelName}
      <input {...register} className={classes.input} />
      {error && <span className={classes.error}>{error.message}</span>}
    </label>
  );
};

export default InputText;
