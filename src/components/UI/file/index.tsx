import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import './index.css';

interface InputProps {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
}

const InputFile = ({ labelName, register, error }: InputProps) => {
  return (
    <div className="from__file__wrapper">
      <label className="from__file__label" data-testid={register.name}>
        {labelName}
        <input type="file" {...register} className="from__file" />
      </label>
      {error && (
        <span className="from__file__error" data-testid={`${register.name}-error`}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default InputFile;
