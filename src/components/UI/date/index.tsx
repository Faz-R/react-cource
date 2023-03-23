import React, { Component } from 'react';
import classes from './index.module.css';

type DateState = {
  input: string;
};

type DateProps = {
  name: string;
  currentRef: React.RefObject<HTMLInputElement>;
};

class Date extends Component<DateProps, DateState> {
  constructor(props: DateProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        {this.props.name}
        <input type="date" ref={this.props.currentRef} className={classes.input} />
      </label>
    );
  }
}

export default Date;
