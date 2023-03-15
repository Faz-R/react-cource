import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import './index.css';

class Layout extends Component {
  render() {
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
  }
}

export default Layout;
