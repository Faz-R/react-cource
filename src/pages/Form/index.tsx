import React, { Component } from 'react';
import Header from '../../components/header';
import classes from './index.module.css';
import { FormFields } from '../../interface/FormFields';
import Form from '../../components/form';
import { cardConvertation } from '../../utils/cardsConvertations';
import { PersonsData } from '../../interface/PersonsData';
import PersonCard from '../../components/personCard';

type FormPageProps = {
  name: string;
};

type FormPageState = {
  infoCards: PersonsData[];
};

class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = { infoCards: [] };
  }

  handlePersonCard = (personCard: FormFields) => {
    this.setState({ infoCards: [...this.state.infoCards, cardConvertation(personCard)] });
  };

  render() {
    return (
      <>
        <Header location="Form" />
        <main>
          <div className="container">
            <section className={classes.section}>
              <h1 className="title">Form</h1>
              <Form getPersonCard={this.handlePersonCard} />
            </section>
            <section className={classes.section}>
              {this.state.infoCards.length !== 0
                ? this.state.infoCards.map((card, index) => {
                    return <PersonCard card={card} key={index} />;
                  })
                : ''}
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default FormPage;
