import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import './index.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const InputText = ({ labelName, register, error }: InputProps) => {
  return (
    <label className="form__input-text__label">
      {labelName}
      <input {...register} className="form__input-text" data-testid={register.name} />
      {error && (
        <span className="form__input-text__error" data-testid={`${register.name}-error`}>
          {error.message}
        </span>
      )}
    </label>
  );
};

export default InputText;
