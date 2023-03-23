import { Component } from 'react';
import classes from './index.module.css';
import { PersonsData } from '../../interface/PersonsData';

type CardsProps = {
  card: PersonsData;
};

type CardsState = Record<string, never>;

class PersonCard extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <li className={classes.card}>
        <div className={classes.picture}>
          <img
            src={this.props.card.photo}
            alt={this.props.card.firstName}
            className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <span className={classes.price}>${this.props.card.firstName}</span>
          <span>{this.props.card.secondName}</span>
        </div>
      </li>
    );
  }
}

export default PersonCard;
