import Search from '../../components/search';
import classes from './index.module.css';
import CardsList from '../../components/cardsList';
import { useState } from 'react';
import { ICard } from '../../components/card/interface';
import Loader from '../../components/UI/loader';
import Modal from '../../components/modal';
import ModalCard from '../../components/modalCard';
import { useAppSelector } from '../../hooks/redux';
import { getError } from '../../utils/getError';
import { useFetchItems } from '../../utils/useFetchItems';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [card, setCard] = useState<ICard>({} as ICard);
  const { searchWord } = useAppSelector((state) => state.searchReducer);
  const { data: items, isLoading, isFetching, error } = useFetchItems(searchWord);

  return (
    <>
      <section className={classes.search}>
        <h1 className="title">Gallery</h1>
        <Search />
      </section>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <ModalCard card={card} />
      </Modal>
      {isLoading || isFetching ? (
        <Loader />
      ) : getError(error, items?.length === 0) ? (
        <span className={classes.error}>{getError(error, items?.length === 0)}</span>
      ) : (
        items &&
        items.length !== 0 && (
          <CardsList cards={items} showCard={setModalVisible} getCard={setCard} />
        )
      )}
    </>
  );
};

export default Home;
