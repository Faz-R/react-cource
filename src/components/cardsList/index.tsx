import classes from './index.module.css';
import { ICard } from '../card/interface';
import Card from '../card';

interface CardsProps {
  cards: ICard[];
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <section className={classes.section}>
      <ul className={classes.cards}>
        {cards.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Cards;
