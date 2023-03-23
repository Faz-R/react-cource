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

type CardsState = {
  cards: ICard[];
  error: string;
};

type CardsProps = Record<string, never>;

class Form extends Component<CardsProps, CardsState> {
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

  constructor(props: CardsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    alert(
      `firstName: ${this.formFields.firstName.current?.value}, secondName: ${this.formFields.secondName.current?.value}, date: ${this.formFields.date.current?.value}, male: ${this.formFields.male.current?.checked}, female: ${this.formFields.female.current?.checked}, file: ${this.formFields.photo.current?.value}`
    );
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
