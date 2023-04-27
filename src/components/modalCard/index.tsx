import { ICard } from '../card/interface';
import './index.css';
import placeholder from '../../assets/placeholder.jpg';

interface ModalCardProps {
  card: ICard;
}

const ModalCard = ({ card }: ModalCardProps) => {
  return (
    <div className="modal__card">
      <div className="modal__card__wrapper">
        <div className="modal__card__picture">
          {card.image_id ? (
            <img
              src={`https://www.artic.edu/iiif/2/${card.image_id}/full/843,/0/default.jpg`}
              alt={card.title}
              className="modal__card__img"
            />
          ) : (
            <img src={placeholder} alt={card.title} className="modal__card__img" />
          )}
        </div>
      </div>
      <div className="modal__card__info">
        <span className="modal__card__title">{card.title}</span>
        {card.artist_title && (
          <span className="modal__card__text">
            <span className="modal__card__subtitle">Artist:</span> {card.artist_title}
          </span>
        )}
        {card.place_of_origin && (
          <span className="modal__card__text">
            <span className="modal__card__subtitle">Place:</span> {card.place_of_origin}
          </span>
        )}
        {card.date_display && (
          <span className="modal__card__text">
            <span className="modal__card__subtitle">Date:</span> {card.date_display}
          </span>
        )}
        {card.medium_display && (
          <span className="modal__card__text">
            <span className="modal__card__subtitle">Medium:</span> {card.medium_display}
          </span>
        )}

        {card.artwork_type_title && (
          <span className="modal__card__text">
            <span className="modal__card__subtitle">Category:</span> {card.artwork_type_title}
          </span>
        )}
      </div>
    </div>
  );
};

export default ModalCard;
