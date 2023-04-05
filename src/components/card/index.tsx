import classes from './index.module.css';
import { ICard } from './interface';
import placeholder from '../../assets/placeholder.jpg';

interface CardProps {
  card: ICard;
  showCard: React.Dispatch<React.SetStateAction<boolean>>;
  getCard: React.Dispatch<React.SetStateAction<ICard>>;
}

const Card = ({ card, showCard, getCard }: CardProps) => {
  return (
    <li
      className={classes.card}
      onClick={() => {
        showCard(true);
        getCard(card);
      }}
    >
      <div className={classes.picture}>
        {card.image_id ? (
          <img
            src={`https://www.artic.edu/iiif/2/${card.image_id}/full/843,/0/default.jpg`}
            alt={card.title}
            className={classes.img}
          />
        ) : (
          <img src={placeholder} alt={card.title} className={classes.img} />
        )}
      </div>
      <div className={classes.info}>
        <span className={classes.title}>{card.title}</span>
      </div>
    </li>
  );
};

export default Card;
