import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './index.module.css';

type HeaderProps = {
  location: string;
};

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? classes.active : classes.link;

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
              <NavLink to="/" className={setActive}>
                Home
              </NavLink>
              <NavLink to="/form" className={setActive}>
                Form
              </NavLink>
              <NavLink to="/about-us" className={setActive}>
                About us
              </NavLink>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
