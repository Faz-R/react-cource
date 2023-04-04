import classes from './index.module.css';
import { ICard } from './interface';

const Card = ({ card }: { card: ICard }) => {
  return (
    <li className={classes.card}>
      <div className={classes.picture}>
        <img
          src={`https://www.artic.edu/iiif/2/${card.image_id}/full/843,/0/default.jpg`}
          alt={card.title}
          className={classes.img}
        />
      </div>
      <div className={classes.info}>
        <span className={classes.price}>{card.title}</span>
        {/* <span>{card.title}</span> */}
        {/* <div className={classes.rating}>
          <div className={classes.stars}>
            <div
              className={classes.stars__active}
              style={{ width: `${(100 * card.rating) / 5}%` }}
            ></div>
          </div>
          <div className={classes.rating__text}>{card.rating}</div>
        </div> */}
      </div>
    </li>
  );
};

export default Card;
