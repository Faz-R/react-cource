import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import classes from './index.module.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const InputFile = ({ labelName, register, error }: InputProps) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>
        {labelName}
        <input type="file" {...register} className={classes.input} />
      </label>
      {error && <span className={classes.error}>{error.message}</span>}
    </div>
  );
};

export default InputFile;
