import React, { Component } from 'react';
import classes from './index.module.css';

type RadioProps = {
  label: string;
  name: string;
  id: string;
  currentRef: React.RefObject<HTMLInputElement>;
};

class InputText extends Component<RadioProps, never> {
  constructor(props: RadioProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        <span className={classes.text}>{this.props.label}</span>
        <input
          type="radio"
          ref={this.props.currentRef}
          name={this.props.name}
          id={this.props.id}
          className={classes.input}
        />
      </label>
    );
  }
}

export default InputText;
