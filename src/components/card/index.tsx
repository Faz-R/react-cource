import { useState } from 'react';
import classes from './index.module.css';
import { ICard } from './interface';
import Modal from '../modal';
import ModalCard from '../modalCard';
import placeholder from '../../assets/placeholder.jpg';

const Card = ({ card }: { card: ICard }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <li className={classes.card} onClick={() => setModalVisible(true)}>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <ModalCard card={card} />
      </Modal>
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
