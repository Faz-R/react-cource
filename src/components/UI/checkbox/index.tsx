import React, { Component } from 'react';
import classes from './index.module.css';

type CheckboxProps = {
  name: string;
  currentRef: React.RefObject<HTMLInputElement>;
  checked?: boolean;
  error?: string;
};

class Checkbox extends Component<CheckboxProps, never> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        <input type="checkbox" ref={this.props.currentRef} className={classes.input} />
        {this.props.name}
        <span className={classes.error}>{this.props.error}</span>
      </label>
    );
  }
}

export default Checkbox;
