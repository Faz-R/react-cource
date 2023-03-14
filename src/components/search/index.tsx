import React, { Component } from 'react';
import './index.css';

interface SearchState {
  search: string;
}

type State = Readonly<SearchState>;

class Search extends Component {
  public readonly state: State = {
    search: localStorage.getItem('search') || '',
  };

  setSearch(value: string) {
    localStorage.setItem('search', value);
    this.setState(() => {
      return { search: value };
    });
  }

  getSearch() {
    return this.state.search;
  }

  render() {
    return (
      <form className="form">
        <input
          type="search"
          placeholder="Search..."
          value={this.getSearch()}
          onChange={(e) => {
            this.setSearch(e.target.value);
            console.log(e.target.value);
          }}
          className="search"
        />
        <button type="button" className="button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
