import React, { Component } from 'react';
import classes from './index.module.css';
import { ICard } from '../../interface/ICard';
import Card from '../card';
import getCards from '../../utils/getCards';

type CardsState = {
  cards: ICard[];
  error: string;
};

type CardsProps = Record<string, never>;

class Cards extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
    this.state = { cards: [], error: '' };
  }

  componentDidMount() {
    getCards()
      .then((items) => this.setState({ cards: items }))
      .catch((err) => {
        this.setState({ error: `Sorry! An error has occurred: ${err.message}` });
      });
  }

  render() {
    return (
      <section className={classes.section}>
        {this.state.cards.length !== 0 ? (
          <ul className={classes.cards}>
            {this.state.cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </ul>
        ) : (
          <span className={classes.error}>{this.state.error}</span>
        )}
      </section>
    );
  }
}

export default Cards;
