import React, { Component } from 'react';
import classes from './index.module.css';

type InputState = {
  input: string;
};

type InputProps = {
  name: string;
};

class InputText extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
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
        <input type="text" value={this.state.input} onChange={this.handleChange} />
      </label>
    );
  }
}

export default InputText;
