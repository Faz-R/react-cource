import { NavLink, useLocation } from 'react-router-dom';
import classes from './index.module.css';

const Header = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${classes.link} ${classes.active}` : `${classes.link}`;

  const location = useLocation();

  return (
    <>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.navigation}>
            <div className={`${classes.link} ${classes.current}`}>
              {location.pathname.slice(1).replace('-', ' ') || 'Home'}
            </div>
            <NavLink to="/" className={setActive} data-testid="home-link">
              Home
            </NavLink>
            <NavLink to="/form" className={setActive} data-testid="form-link">
              Form
            </NavLink>
            <NavLink to="/about-us" className={setActive} data-testid="about-link">
              About us
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
