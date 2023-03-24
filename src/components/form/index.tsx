import React, { Component } from 'react';
import classes from './index.module.css';
import { countries } from '../../utils/countries';
import Button from '../UI/button';
import Checkbox from '../UI/checkbox';
import InputText from '../UI/inputText';
import Radio from '../UI/radio';
import Select from '../UI/select';
import Date from '../UI/date';
import File from '../UI/file';
import { FormFields } from '../../interface/FormFields';
import { formErrors, FormProps, FormState, formValid } from './interface';
import { ACTUAL__DATE, TEXT__REGEXP } from './constant';

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
    this.state = {
      info: {} as FormFields,
      showMessage: false,
      errors: {} as formErrors,
      valid: {} as formValid,
    };
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    Object.entries(this.formFields).forEach(([name, data]) => {
      this.validate(name, data);
    });

    if (
      this.state.valid.country &&
      this.state.valid.date &&
      this.state.valid.firstName &&
      this.state.valid.photo &&
      this.state.valid.secondName &&
      this.state.valid.sex
    ) {
      this.setState({ showMessage: true });
      this.props.getPersonCard(this.formFields);

      setTimeout(() => {
        this.setState({ showMessage: false });
      }, 3000);
    }
  }

  validate(
    fieldName: string,
    field: React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>
  ) {
    const fieldsError = this.state.errors;
    const fieldsValid = this.state.valid;

    switch (fieldName) {
      case 'firstName':
        fieldsValid.firstName =
          field.current !== null &&
          field.current.value.length >= 3 &&
          TEXT__REGEXP.test(field.current.value);
        fieldsError.firstName = fieldsValid.firstName ? '' : 'Enter 3 or more characters';
        break;
      case 'secondName':
        fieldsValid.secondName =
          field.current !== null &&
          field.current.value.length >= 3 &&
          TEXT__REGEXP.test(field.current.value);
        fieldsError.secondName = fieldsValid.secondName ? '' : 'Enter 3 or more characters';
        break;
      case 'date':
        console.log(field.current?.value.length);
        fieldsValid.date =
          field.current !== null &&
          field.current.value.length !== 0 &&
          field.current.value.length == 10 &&
          +field.current.value.slice(0, 4) < ACTUAL__DATE;
        fieldsError.date = fieldsValid.date ? '' : 'Enter a date < current date';
        break;
      case 'country':
        fieldsValid.country = field.current !== null && field.current.value.length !== 0;
        fieldsError.country = fieldsValid.country ? '' : 'Choose the country';
        break;
      case 'male':
        if (!fieldsValid.sex) {
          fieldsValid.sex = (field.current as HTMLInputElement).checked;
          fieldsError.sex = fieldsValid.sex ? '' : 'Choose gender';
        }
        break;
      case 'female':
        if (!fieldsValid.sex) {
          fieldsValid.sex = (field.current as HTMLInputElement).checked;
          fieldsError.sex = fieldsValid.sex ? '' : 'Choose gender';
        }
        break;
      case 'photo':
        fieldsValid.photo = field.current !== null && field.current.value.length !== 0;
        fieldsError.photo = fieldsValid.photo ? '' : 'Upload a photo';
        break;
      default:
        break;
    }

    this.setState({ errors: fieldsError, valid: fieldsValid });
  }

  render() {
    return (
      <form
        className={`${classes.form} ${this.props.class}`}
        onSubmit={this.handleSubmit}
        ref={this.props.currentRef}
      >
        {this.state.showMessage ? (
          <div className={classes.message}>
            <span className={classes.message__text}>Information has been saved</span>
          </div>
        ) : (
          ''
        )}
        <div className={classes.info__row}>
          <InputText
            name="First name"
            currentRef={this.formFields.firstName}
            error={this.state.errors.firstName}
          />
          <InputText
            name="Second name"
            currentRef={this.formFields.secondName}
            error={this.state.errors.secondName}
          />
        </div>
        <div className={classes.info__row}>
          <Date name="Date" currentRef={this.formFields.date} error={this.state.errors.date} />
          <Select
            name="Country"
            options={countries}
            currentRef={this.formFields.country}
            error={this.state.errors.country}
          />
        </div>
        <div className={classes.info__column}>
          <span className={classes.block__title}>Gender</span>
          <div className={classes.sex}>
            <Radio label={'Male'} name={'sex'} id={'male'} currentRef={this.formFields.male} />
            <Radio
              label={'Female'}
              name={'sex'}
              id={'female'}
              currentRef={this.formFields.female}
            />
            <span className={classes.sex__error}>{this.state.errors.sex}</span>
          </div>
        </div>
        <File
          name={'Add photo'}
          currentRef={this.formFields.photo}
          error={this.state.errors.photo}
        />
        <Checkbox
          name="All requirements are met according to the task."
          checked={true}
          currentRef={this.formFields.check}
        />
        <Button name={'Submit'} type={'submit'} class={classes.button} />
      </form>
    );
  }
}

export default Form;
