import classes from './index.module.css';
import { PersonsData } from '../../interface/PersonsData';

const PersonCard = ({ card }: { card: PersonsData }) => {
  return (
    <li className={`${classes.card} ${card.check ? classes.check : classes.uncheck}`}>
      <div className={classes.picture}>
        <img src={card.photo} alt={card.firstName} className={classes.img} />
        <span className={classes.sex}>
          {card.sex === 'male' ? (
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
          {card.date}
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
