import classes from './index.module.css';
import { ICard } from '../../interface/ICard';

const Card = ({ card }: { card: ICard }) => {
  return (
    <li className={classes.card}>
      <div className={classes.picture}>
        <img src={card.thumbnail} alt={card.title} className={classes.img} />
      </div>
      <div className={classes.info}>
        <span className={classes.price}>${card.price}</span>
        <span>{card.title}</span>
        <div className={classes.rating}>
          <div className={classes.stars}>
            <div
              className={classes.stars__active}
              style={{ width: `${(100 * card.rating) / 5}%` }}
            ></div>
          </div>
          <div className={classes.rating__text}>{card.rating}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
