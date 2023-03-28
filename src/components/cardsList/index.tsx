import { useEffect, useState } from 'react';
import classes from './index.module.css';
import { ICard } from '../../interface/ICard';
import Card from '../card';
import getCards from '../../utils/getCards';

const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getCards()
      .then((items) => setCards(items))
      .catch((err) => {
        setError(`Sorry! An error has occurred: ${err.message}`);
      });
  });

  return (
    <section className={classes.section}>
      {cards.length !== 0 ? (
        <ul className={classes.cards}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </ul>
      ) : (
        <span className={classes.error}>{error}</span>
      )}
    </section>
  );
};

export default Cards;
