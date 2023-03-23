import React, { Component, RefObject } from 'react';
import classes from './index.module.css';

type ButtonProps = {
  name: string;
  type: 'button' | 'submit';
};

class Button extends Component<ButtonProps, never> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return <input type={this.props.type} className={classes.button} value={this.props.name} />;
  }
}

export default Button;
