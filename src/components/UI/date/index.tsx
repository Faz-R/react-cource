import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import './index.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const InputDate = ({ labelName, register, error }: InputProps) => {
  return (
    <label className="form__date__label">
      {labelName}
      <input {...register} type="date" className="form__date" data-testid={register.name} />
      {error && (
        <span className="form__date__error" data-testid={`${register.name}-error`}>
          {error.message}
        </span>
      )}
    </label>
  );
};

export default InputDate;
