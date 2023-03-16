import Search from '../../components/search';
import React, { Component } from 'react';
import classes from './index.module.css';
import Header from '../../components/header';

class Home extends Component {
  render() {
    return (
      <>
        <Header location="Home" />
        <main>
          <div className="container">
            <section className={classes.search}>
              <h1 className="title">Moogle</h1>
              <Search />
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
