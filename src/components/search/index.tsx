import React, { useEffect } from 'react';
import classes from './index.module.css';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { SearchSlice } from '../../store/reducers/searchSlice';

interface SearchForm {
  searchText: string;
}

let search = '';
const Search = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SearchForm>({ mode: 'onSubmit' });

  const { searchWord } = useAppSelector((state) => state.searchReducer);
  const { addSearch } = SearchSlice.actions;
  const dispatch = useAppDispatch();

  search = searchWord;

  const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    search = e.target.value;
  };

  useEffect(() => {
    return () => {
      dispatch(addSearch(search));
    };
  }, [addSearch, dispatch]);

  const onSubmit = (data: SearchForm) => {
    dispatch(addSearch(data.searchText));
  };

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
