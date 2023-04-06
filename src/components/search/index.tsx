import React, { useEffect } from 'react';
import classes from './index.module.css';
import { useForm } from 'react-hook-form';

interface SearchForm {
  searchText: string;
}

interface SearchProps {
  getSearchString: (personCard: string) => void;
}

let search = localStorage.getItem('search') ?? '';

const Search = ({ getSearchString }: SearchProps) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<SearchForm>({ mode: 'onSubmit' });

  const onSubmit = (data: SearchForm) => {
    getSearchString(data.searchText);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('search', search);
    };
  }, []);

  const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    search = e.target.value;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      search = '';
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
        data-testid="search"
      />
      <button type="submit" className={classes.button}>
        Search
      </button>
    </form>
  );
};

export default Search;
