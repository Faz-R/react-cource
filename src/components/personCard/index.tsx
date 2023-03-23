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
      <li className={`${classes.card} ${this.props.card.check ? classes.check : classes.uncheck}`}>
        <div className={classes.picture}>
          <img
            src={this.props.card.photo}
            alt={this.props.card.firstName}
            className={classes.img}
          />
          <span className={classes.sex}>
            {this.props.card.sex === 'male' ? (
              <i className={`fa-solid fa-mars ${classes.male}`}></i>
            ) : (
              <i className={`fa-solid fa-venus ${classes.female}`}></i>
            )}
          </span>
        </div>
        <div className={classes.info}>
          <span
            className={classes.name}
          >{`${this.props.card.firstName} ${this.props.card.secondName}`}</span>
          <span className={classes.info__block}>
            <i className={`fa-regular fa-calendar ${classes.date}`}></i>
            {this.props.card.date}
          </span>
          <span className={classes.info__block}>
            <i className={`fa-solid fa-location-pin ${classes.location}`}></i>
            {this.props.card.country}
          </span>
        </div>
      </li>
    );
  }
}

export default PersonCard;
