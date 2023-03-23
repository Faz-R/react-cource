import React, { Component, RefObject } from 'react';
import classes from './index.module.css';

type CheckboxState = {
  input: RefObject<string>;
};

type CheckboxProps = {
  name: string;
  currentRef: React.RefObject<HTMLInputElement>;
  checked?: boolean;
};

class Checkbox extends Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        <input type="checkbox" ref={this.props.currentRef} className={classes.input} />
        {this.props.name}
      </label>
    );
  }
}

export default Checkbox;
