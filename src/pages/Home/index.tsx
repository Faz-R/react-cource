import Search from '../../components/search';
import React, { Component } from 'react';
import classes from './index.module.css';

type SearchState = {
  search: string;
};

type SearchProps = Record<string, never>;

class Home extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { search: '' };
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
      <section className={classes.search}>
        <h1 className="title">Moogle</h1>
        <Search />
      </section>
    );
  }
}

export default Home;
