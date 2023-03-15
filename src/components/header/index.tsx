import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className={classes.header}>
          <div className="container">
            <div className={classes.navigation}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
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
