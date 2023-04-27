import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import './index.css';

interface InputProps {
  labelName: string;
  options: string[];
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const Select = ({ labelName, options, register, error }: InputProps) => {
  return (
    <label className="form__select__label">
      {labelName}
      <select {...register} className="form__select" data-testid={register.name}>
        {options.map((option) => {
          return (
            <option value={option} className="form__select__option" key={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && (
        <span className="form__select__error" data-testid={`${register.name}-error`}>
          {error.message}
        </span>
      )}
    </label>
  );
};

export default Select;
