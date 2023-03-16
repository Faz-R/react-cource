import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

type HeaderProps = {
  location: string;
};

class Header extends Component<HeaderProps, never> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <>
        <header className={classes.header}>
          <div className="container">
            <div className={classes.navigation}>
              <div className={`${classes.link} ${classes.current}`}>{this.props.location}</div>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about-us" className={classes.link}>
                About us
              </Link>
              <Link to="/404" className={classes.link}>
                404
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
