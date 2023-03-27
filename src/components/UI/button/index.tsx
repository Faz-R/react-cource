import { Component } from 'react';
import classes from './index.module.css';

type ButtonProps = {
  name: string;
  type: 'button' | 'submit';
  class?: string;
};

class Button extends Component<ButtonProps, never> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <input
        type={this.props.type}
        className={`${classes.button} ${this.props.class}`}
        value={this.props.name}
      />
    );
  }
}

export default Button;
