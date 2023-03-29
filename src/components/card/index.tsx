import { Component } from 'react';
import classes from './index.module.css';
import { ICard } from '../../interface/ICard';

type CardsProps = {
  card: ICard;
};

type CardsState = Record<string, never>;

class Card extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <li className={classes.card}>
        <div className={classes.picture}>
          <img
            src={this.props.card.thumbnail}
            alt={this.props.card.title}
            className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <span className={classes.price}>${this.props.card.price}</span>
          <span>{this.props.card.title}</span>
          <div className={classes.rating}>
            <div className={classes.stars}>
              <div
                className={classes.stars__active}
                style={{ width: `${(100 * this.props.card.rating) / 5}%` }}
              ></div>
            </div>
            <div className={classes.rating__text}>{this.props.card.rating}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
