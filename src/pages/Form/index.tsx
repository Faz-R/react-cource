import React, { Component } from 'react';
import Header from '../../components/header';
import classes from './index.module.css';
import { FormFields } from '../../interface/FormFields';
import Form from '../../components/form';

type FormPageProps = {
  name: string;
};

class FormPage extends Component<FormPageProps, never> {
  private formFields: FormFields = {
    firstName: React.createRef(),
    secondName: React.createRef(),
    date: React.createRef(),
    country: React.createRef(),
    male: React.createRef(),
    female: React.createRef(),
    photo: React.createRef(),
    check: React.createRef(),
  };

  constructor(props: FormPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header location="Form" />
        <main>
          <div className="container">
            <section className={classes.section}>
              <h1 className="title">Form</h1>
              <Form />
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default FormPage;
