import { ICard } from '../card/interface';
import classes from './index.module.css';
import placeholder from '../../assets/placeholder.jpg';

interface ModalCardProps {
  card: ICard;
}

const ModalCard = ({ card }: ModalCardProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.wrapper}>
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
      </div>
      <div className={classes.info}>
        <span className={classes.title}>{card.title}</span>
        {card.artist_title && (
          <span className={classes.text}>
            <span className={classes.subtitle}>Artist:</span> {card.artist_title}
          </span>
        )}
        {card.place_of_origin && (
          <span className={classes.text}>
            <span className={classes.subtitle}>Place:</span> {card.place_of_origin}
          </span>
        )}
        {card.date_display && (
          <span className={classes.text}>
            <span className={classes.subtitle}>Date:</span> {card.date_display}
          </span>
        )}
        {card.medium_display && (
          <span className={classes.text}>
            <span className={classes.subtitle}>Medium:</span> {card.medium_display}
          </span>
        )}

        {card.artwork_type_title && (
          <span className={classes.text}>
            <span className={classes.subtitle}>Category:</span> {card.artwork_type_title}
          </span>
        )}
      </div>
    </div>
  );
};

export default ModalCard;
