import React, { Component } from 'react';
import Header from '../../components/header';
import InputText from '../../components/UI/inputText';
import Date from '../../components/UI/date';
import classes from './index.module.css';
import Select from '../../components/UI/select';
import { countries } from '../../utils/countries';

class Form extends Component {
  render() {
    return (
      <>
        <Header location="Form" />
        <main>
          <div className="container">
            <section className={classes.section}>
              <h1 className="title">Form</h1>
              <form className={classes.form}>
                <div className={classes.info}>
                  <InputText name="Name" />
                  <InputText name="Second name" />
                </div>
                <div className={classes.info}>
                  <Date name="Date" />
                  <Select name="Country" options={countries} />
                </div>
                <input type="radio" />
                <input type="checkbox" />
                <input type="file" />
              </form>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Form;
