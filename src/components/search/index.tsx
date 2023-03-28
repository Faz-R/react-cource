import React, { useEffect, useState } from 'react';
import classes from './index.module.css';

const Search = () => {
  const [search, setSearh] = useState(localStorage.getItem('search') ?? '');

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearh(e.target.value);
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
