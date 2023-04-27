import { NavLink, useLocation } from 'react-router-dom';
import './index.css';

const Header = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `header__link header__active` : `header__link`;

  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__navigation">
            <div className={`header__link header__current`}>
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
