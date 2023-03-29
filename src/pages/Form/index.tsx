import React, { Component } from 'react';
import Header from '../../components/header';
import classes from './index.module.css';
import { FormFields } from '../../interface/FormFields';
import Form from '../../components/form';
import { cardConvertation } from '../../utils/cardsConvertations';
import { PersonsData } from '../../interface/PersonsData';
import PersonCardsList from '../../components/personCardList';

type FormPageProps = Record<string, never>;

type FormPageState = {
  infoCards: PersonsData[];
};

class FormPage extends Component<FormPageProps, FormPageState> {
  private formRef: React.RefObject<HTMLFormElement> = React.createRef();
  constructor(props: FormPageProps) {
    super(props);
    this.state = { infoCards: [] };
  }

  handlePersonCard = (personCard: FormFields) => {
    this.setState({ infoCards: [...this.state.infoCards, cardConvertation(personCard)] });
    this.formRef.current?.reset();
  };

  render() {
    return (
      <>
        <Header location="Form" />
        <main>
          <div className="container">
            <h1 className="title">Form</h1>
            <section className={classes.section}>
              <Form
                getPersonCard={this.handlePersonCard}
                class={classes.form}
                currentRef={this.formRef}
              />
              <PersonCardsList cards={this.state.infoCards} class={classes.list} />
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default FormPage;
