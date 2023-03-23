import React, { Component } from 'react';
import classes from './index.module.css';
import { ICard } from '../../interface/ICard';
import { countries } from '../../utils/countries';
import Button from '../UI/button';
import Checkbox from '../UI/checkbox';
import InputText from '../UI/inputText';
import Radio from '../UI/radio';
import Select from '../UI/select';
import Date from '../UI/date';
import File from '../UI/file';
import { FormFields } from '../../interface/FormFields';

type FormState = {
  info: FormFields;
};

type FormProps = {
  getPersonCard: (personCard: FormFields) => void;
};

class Form extends Component<FormProps, FormState> {
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

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    this.props.getPersonCard(this.formFields);
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <div className={classes.info__row}>
          <InputText name="First name" currentRef={this.formFields.firstName} />
          <InputText name="Second name" currentRef={this.formFields.secondName} />
        </div>
        <div className={classes.info__row}>
          <Date name="Date" currentRef={this.formFields.date} />
          <Select name="Country" options={countries} currentRef={this.formFields.country} />
        </div>
        <div className={classes.info__column}>
          <span className={classes.block__title}>Sex</span>
          <div className={classes.sex}>
            <Radio label={'Male'} name={'sex'} id={'male'} currentRef={this.formFields.male} />
            <Radio
              label={'Female'}
              name={'sex'}
              id={'female'}
              currentRef={this.formFields.female}
            />
          </div>
        </div>
        <File name={'Add photo'} currentRef={this.formFields.photo} />
        <Checkbox
          name="All requirements are met according to the task."
          checked={true}
          currentRef={this.formFields.check}
        />
        <Button name={'Submit'} type={'submit'} />
      </form>
    );
  }
}

export default Form;
