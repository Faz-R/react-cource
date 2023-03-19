import React, { Component } from 'react';
import Header from '../../components/header';

class About extends Component {
  render() {
    return (
      <>
        <Header location="About us" />
        <main>
          <div className="container">
            <h1 className="title">About us</h1>
          </div>
        </main>
      </>
    );
  }
}

export default About;
