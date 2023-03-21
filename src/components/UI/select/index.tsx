import React, { Component } from 'react';
import classes from './index.module.css';

type SelectState = {
  value: string;
};

type SelectProps = {
  name: string;
  options: string[];
};

class Select extends Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <label className={classes.label}>
        {this.props.name}
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.options.map((option) => {
            return (
              <option value={option} className={classes.option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}

export default Select;
