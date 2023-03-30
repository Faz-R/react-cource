import Search from '../../components/search';
import classes from './index.module.css';
import CardsList from '../../components/cardsList';

const Home = () => {
  return (
    <>
      <section className={classes.search}>
        <h1 className="title">Moogle</h1>
        <Search />
      </section>
      <CardsList />
    </>
  );
};

export default Home;
