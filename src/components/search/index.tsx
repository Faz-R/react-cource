import React, { useEffect, useState } from 'react';
import classes from './index.module.css';

const Search = () => {
  const [search, setSearh] = useState('');

  useEffect(() => {
    const searchText = localStorage.getItem('search');
    localStorage.setItem('search', '');

    return () => {
      if (searchText) {
        setSearh(searchText);
      }
    };
  }, []);

  const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearh(e.target.value);
    localStorage.setItem('search', e.target.value);
  };

  return (
    <form className={classes.form}>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={changeSearch}
        className={classes.search}
        name="search"
      />
      <button type="button" className={classes.button}>
        Search
      </button>
    </form>
  );
};

export default Search;
