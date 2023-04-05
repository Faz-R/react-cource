import classes from './index.module.css';
import { ICard } from '../card/interface';
import Card from '../card';

interface CardsProps {
  cards: ICard[];
  showCard: React.Dispatch<React.SetStateAction<boolean>>;
  getCard: React.Dispatch<React.SetStateAction<ICard>>;
}

const Cards = ({ cards, showCard, getCard }: CardsProps) => {
  return (
    <section className={classes.section}>
      <ul className={classes.cards}>
        {cards.map((card, index) => {
          return <Card card={card} key={index} showCard={showCard} getCard={getCard} />;
        })}
      </ul>
    </section>
  );
};

export default Cards;
