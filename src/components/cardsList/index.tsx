import classes from './index.module.css';
import { ICard } from '../card/interface';
import Card from '../card';

interface CardsProps {
  cards: ICard[];
}

const Cards = ({ cards }: CardsProps) => {
  // const [cards, setCards] = useState<ICard[]>([]);
  // const [error, setError] = useState<string>('');

  // useEffect(() => {
  //   getCards({ limit: 8 })
  //     .then((items) => setCards(items))
  //     .catch((err) => {
  //       setError(`Sorry! An error has occurred: ${err.message}`);
  //     });
  // }, []);

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
