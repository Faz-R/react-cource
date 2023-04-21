import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import classes from './index.module.css';

interface InputProps {
  labelName: string;
  options: string[];
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const Select = ({ labelName, options, register, error }: InputProps) => {
  return (
    <label className={classes.label}>
      {labelName}
      <select {...register} className={classes.select} data-testid={register.name}>
        {options.map((option) => {
          return (
            <option value={option} className={classes.option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && (
        <span className={classes.error} data-testid={`${register.name}-error`}>
          {error.message}
        </span>
      )}
    </label>
  );
};

export default Select;
