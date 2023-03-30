import { FormValues } from '../form/interface';
import classes from './index.module.css';

const PersonCard = ({ card }: { card: FormValues }) => {
  return (
    <li className={`${classes.card} {card.check ? classes.check : classes.uncheck}`}>
      <div className={classes.picture}>
        <img
          src={URL.createObjectURL(card.photo[0])}
          alt={card.firstName}
          className={classes.img}
        />
        <span className={classes.sex}>
          {card.gender === 'male' ? (
            <i className={`fa-solid fa-mars ${classes.male}`}></i>
          ) : (
            <i className={`fa-solid fa-venus ${classes.female}`}></i>
          )}
        </span>
      </div>
      <div className={classes.info}>
        <span className={classes.name}>{`${card.firstName} ${card.secondName}`}</span>
        <span className={classes.info__block}>
          <i className={`fa-regular fa-calendar ${classes.date}`}></i>
          {card.date.toLocaleString()}
        </span>
        <span className={classes.info__block}>
          <i className={`fa-solid fa-location-pin ${classes.location}`}></i>
          {card.country}
        </span>
      </div>
    </li>
  );
};

export default PersonCard;
