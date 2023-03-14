import Search from '../../components/search';
import React, { Component } from 'react';
import './index.css';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Moogle</h1>
        <Search />
      </div>
    );
  }
}

export default Main;
