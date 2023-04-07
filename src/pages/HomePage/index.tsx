import Search from '../../components/search';
import classes from './index.module.css';
import CardsList from '../../components/cardsList';
import { useState, useEffect } from 'react';
import { ICard } from '../../components/card/interface';
import Loader from '../../components/UI/loader';
import Modal from '../../components/modal';
import ModalCard from '../../components/modalCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCardsApi } from '../../utils/getCardsApi';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, errorApi } = useAppSelector((state) => state.apiReducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [card, setCard] = useState<ICard>({} as ICard);

  const handleSearch = async (searchQuery: string) => {
    dispatch(getCardsApi(searchQuery));
  };

  useEffect(() => {
    items.length === 0 && handleSearch('');
  }, []);

  return (
    <>
      <section className={classes.search}>
        <h1 className="title">Gallery</h1>
        <Search getSearchString={handleSearch} />
      </section>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <ModalCard card={card} />
      </Modal>
      {isLoading ? (
        <Loader />
      ) : errorApi ? (
        <span className={classes.error}>{errorApi}</span>
      ) : (
        <CardsList cards={items} showCard={setModalVisible} getCard={setCard} />
      )}
    </>
  );
};

export default Home;
