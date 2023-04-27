import './index.css';

type ButtonProps = {
  name: string;
  type: 'button' | 'submit';
  classElement?: string;
};

const Button = ({ name, type, classElement = '' }: ButtonProps) => {
  return (
    <input type={type} className={`form__button ${classElement}`} value={name} data-testid={name} />
  );
};

export default Button;
