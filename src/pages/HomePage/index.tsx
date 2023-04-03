import Search from '../../components/search';
import classes from './index.module.css';
import CardsList from '../../components/cardsList';
import { useState } from 'react';
import { ICard } from '../../components/card/interface';
import Loader from '../../components/UI/loader';

const Home = () => {
  const [itemCard, setItemCard] = useState([] as ICard[]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (search: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    console.log(search);
  };
  return (
    <>
      <section className={classes.search}>
        <h1 className="title">Moogle</h1>
        <Search getSearchString={handleSearch} />
      </section>
      {loading ? <Loader /> : <CardsList />}
    </>
  );
};

export default Home;
