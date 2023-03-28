import { Outlet } from 'react-router-dom';
import Header from '../header';
import './index.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
