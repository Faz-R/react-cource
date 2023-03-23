import React, { Component, RefObject } from 'react';
import classes from './index.module.css';

type FileState = {
  input: RefObject<string>;
};

type FileProps = {
  name: string;
  currentRef: React.RefObject<HTMLInputElement>;
};

class File extends Component<FileProps, FileState> {
  constructor(props: FileProps) {
    super(props);
  }

  render() {
    return (
      <label className={classes.label}>
        {this.props.name}
        <input type="file" ref={this.props.currentRef} className={classes.input} />
      </label>
    );
  }
}

export default File;
