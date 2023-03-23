import React, { Component } from 'react';
import classes from './index.module.css';
import { ICard } from '../../interface/ICard';
import Card from '../card';
import getCards from '../../utils/getCards';
import { PersonsData } from '../../interface/PersonsData';
import PersonCard from '../personCard';

type CardsProps = {
  cards: PersonsData[];
  class: string;
};

class PersonCardsList extends Component<CardsProps, never> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <section className={`${classes.section} ${this.props.class}`}>
        {this.props.cards.length !== 0 ? (
          <ul className={classes.cards}>
            {this.props.cards.map((card, index) => {
              return <PersonCard card={card} key={index} />;
            })}
          </ul>
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default PersonCardsList;
