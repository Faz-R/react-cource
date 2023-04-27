import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';
import './index.css';

type RadioProps = {
  labelName: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  value: string;
};

const Radio = ({ labelName, register, value }: RadioProps) => {
  return (
    <label className="form__radio__label">
      <span className="form__radio__text">{labelName}</span>
      <input
        type="radio"
        {...register}
        value={value}
        className="form__radio"
        data-testid={labelName}
      />
    </label>
  );
};

export default Radio;
