import React, { Component, RefObject } from 'react';
import classes from './index.module.css';

type InputState = {
  input: RefObject<string>;
};

type InputProps = {
  name: string;
  currentRef: React.RefObject<HTMLInputElement>;
  error?: string;
};

class InputText extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        {this.props.name}
        <input type="text" ref={this.props.currentRef} className={classes.input} />
        <span className={classes.error}>{this.props.error}</span>
      </label>
    );
  }
}

export default InputText;
