import React, { Component } from 'react';
import Header from '../../components/header';

class NotFound extends Component {
  render() {
    return (
      <>
        <Header location="Page not Found" />
        <main>
          <div className="container">
            <h1 className="title">404</h1>
            <div className="subtitle">Page Not Found</div>
          </div>
        </main>
      </>
    );
  }
}

export default NotFound;
