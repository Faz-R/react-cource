import classes from './index.module.css';
import PersonCard from '../personCard';
import { PersonData } from '../form/interface';

type CardsProps = {
  cards: PersonData[];
  classPerson: string;
};

const PersonCardsList = ({ cards, classPerson }: CardsProps) => {
  return (
    <section className={`${classes.section} ${classPerson}`}>
      {cards.length !== 0 ? (
        <ul className={classes.cards}>
          {cards.map((card, index) => {
            return <PersonCard card={card} key={index} />;
          })}
        </ul>
      ) : (
        ''
      )}
    </section>
  );
};

export default PersonCardsList;
