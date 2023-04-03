import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import { useForm } from 'react-hook-form';

interface SearchForm {
  searchText: string;
}

interface SearchProps {
  getSearchString: (personCard: string) => void;
}

const Search = ({ getSearchString }: SearchProps) => {
  const [search, setSearch] = useState(localStorage.getItem('search') ?? '');
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<SearchForm>({ mode: 'onSubmit' });

  const onSubmit = (data: SearchForm) => {
    getSearchString(data.searchText);
    console.log(data);
  };

  useEffect(() => {
    localStorage.setItem('search', '');

    return () => {
      localStorage.setItem('search', search);
    };
  }, [search]);

  const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setSearch('');
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      {errors.searchText && <span className={classes.error}>{errors.searchText.message}</span>}
      <input
        type="search"
        className={classes.search}
        {...register('searchText', {
          required: 'Field is empty',
          onChange: (e) => changeSearch(e),
          value: search,
        })}
      />
      <button type="submit" className={classes.button}>
        Search
      </button>
    </form>
  );
};

export default Search;
