import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import './index.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const Checkbox = ({ labelName, register, error }: InputProps) => {
  return (
    <label className="form__checkbox__label">
      <input type="checkbox" {...register} className="form__checkbox" data-testid={register.name} />
      {labelName}
      {error && (
        <span className="form__checkbox__error" data-testid={`${register.name}-error`}>
          {error.message}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
