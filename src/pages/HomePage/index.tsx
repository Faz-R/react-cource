import Search from '../../components/search';
import classes from './index.module.css';
import CardsList from '../../components/cardsList';
import { useState } from 'react';
import { ICard } from '../../components/card/interface';
import Loader from '../../components/UI/loader';
import getCards from '../../utils/getCards';

const Home = () => {
  const [itemCards, setItemCards] = useState([] as ICard[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);

    await getCards({ search: searchQuery })
      .then((items: ICard[]) => setItemCards(items))
      .catch((err: Error) => {
        setError(`Sorry! An error has occurred: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section className={classes.search}>
        <h1 className="title">Gallery</h1>
        <Search getSearchString={handleSearch} />
      </section>
      {loading ? <Loader /> : <CardsList cards={itemCards} />}
      <span>{error}</span>
    </>
  );
};

export default Home;
