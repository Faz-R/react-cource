import React, { Component } from 'react';
import classes from './index.module.css';

type FileProps = {
  name: string;
  currentRef: React.RefObject<HTMLInputElement>;
  error?: string;
};

class File extends Component<FileProps, never> {
  constructor(props: FileProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <label className={classes.label}>
          {this.props.name}
          <input type="file" ref={this.props.currentRef} className={classes.input} />
        </label>
        <span className={classes.error}>{this.props.error}</span>
      </div>
    );
  }
}

export default File;
