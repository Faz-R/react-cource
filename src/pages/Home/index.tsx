import Search from '../../components/search';
import React, { Component } from 'react';
import classes from './index.module.css';
import Header from '../../components/header';
import CardsList from '../../components/cardsList';

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
            <CardsList />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
