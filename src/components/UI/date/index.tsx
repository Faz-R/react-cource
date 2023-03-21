import React, { Component } from 'react';
import classes from './index.module.css';

type DateState = {
  input: string;
};

type DateProps = {
  name: string;
};

class Date extends Component<DateProps, DateState> {
  constructor(props: DateProps) {
    super(props);
    this.state = { input: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <label className={classes.label}>
        {this.props.name}
        <input type="date" value={this.state.input} onChange={this.handleChange} />
      </label>
    );
  }
}

export default Date;
