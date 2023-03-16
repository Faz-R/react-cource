import React, { Component } from 'react';
import classes from './index.module.css';

type SearchState = {
  search: string;
};

type SearchProps = Record<string, never>;

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { search: localStorage.getItem('search') ?? '' };
  }

  componentDidMount() {
    this.setState({ search: localStorage.getItem('search') ?? '' });
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <form className={classes.form}>
        <input
          type="search"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.changeSearch}
          className={classes.search}
        />
        <button type="button" className={classes.button}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
