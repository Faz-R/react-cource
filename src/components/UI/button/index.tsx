import classes from './index.module.css';

type ButtonProps = {
  name: string;
  type: 'button' | 'submit';
  classElement?: string;
};

const Button = ({ name, type, classElement = '' }: ButtonProps) => {
  return <input type={type} className={`${classes.button} ${classElement}`} value={name} />;
};

export default Button;
