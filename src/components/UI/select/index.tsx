import React, { Component } from 'react';
import classes from './index.module.css';

type SelectState = {
  value: string;
};

type SelectProps = {
  name: string;
  options: string[];
  currentRef: React.RefObject<HTMLSelectElement>;
  error?: string;
};

class Select extends Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        {this.props.name}
        <select ref={this.props.currentRef} className={classes.select}>
          {this.props.options.map((option) => {
            return (
              <option value={option} className={classes.option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
        <span className={classes.error}>{this.props.error}</span>
      </label>
    );
  }
}

export default Select;
