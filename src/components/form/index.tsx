import React, { MutableRefObject, useRef, useState } from 'react';
import classes from './index.module.css';
import { countries } from '../../utils/countries';
import Button from '../UI/button';
import Checkbox from '../UI/checkbox';
import InputText from '../UI/inputText';
import Radio from '../UI/radio';
import Select from '../UI/select';
import Date from '../UI/date';
import File from '../UI/file';
import { formErrors, FormFields, FormProps, formValid } from './interface';
import { ACTUAL__DATE, TEXT__REGEXP } from './constant';

const Form = ({ getPersonCard, classForm, currentRef }: FormProps) => {
  const [message, setMessage] = useState(false);
  const [errors, setErrors] = useState({} as formErrors);
  const [valid, setValid] = useState({} as formValid);

  const formFields: FormFields = {
    firstName: useRef(null),
    secondName: useRef(null),
    date: useRef(null),
    country: useRef(null),
    male: useRef(null),
    female: useRef(null),
    photo: useRef(null),
    check: useRef(null),
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Object.entries(formFields).forEach(([name, data]) => {
      validate(name, data);
    });

    if (!Object.values(valid).some((e) => e == false)) {
      setMessage(true);
      getPersonCard(formFields);
      currentRef.current?.reset();

      setTimeout(() => {
        setMessage(false);
      }, 3000);
    }
  };

  const validate = (
    fieldName: string,
    field: MutableRefObject<HTMLInputElement> | MutableRefObject<HTMLSelectElement>
  ) => {
    const fieldsError = errors;
    const fieldsValid = valid;

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
        fieldsValid.date =
          field.current !== null &&
          field.current.value.length !== 0 &&
          field.current.value.length == 10 &&
          +field.current.value.slice(0, 4) <= ACTUAL__DATE;
        fieldsError.date = fieldsValid.date ? '' : 'Enter a date <= current date';
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
      case 'check':
        fieldsValid.check = field.current !== null && (field.current as HTMLInputElement).checked;
        fieldsError.check = fieldsValid.check ? '' : 'Accept terms';
        break;
      default:
        break;
    }

    setErrors(JSON.parse(JSON.stringify(fieldsError)));
    setValid(JSON.parse(JSON.stringify(fieldsValid)));
  };

  return (
    <form className={`${classes.form} ${classForm}`} onSubmit={handleSubmit} ref={currentRef}>
      {message ? (
        <div className={classes.message}>
          <span className={classes.message__text}>Information has been saved</span>
        </div>
      ) : (
        ''
      )}
      <div className={classes.info__row}>
        <InputText name="First name" currentRef={formFields.firstName} error={errors.firstName} />
        <InputText
          name="Second name"
          currentRef={formFields.secondName}
          error={errors.secondName}
        />
      </div>
      <div className={classes.info__row}>
        <Date name="Date of Birth" currentRef={formFields.date} error={errors.date} />
        <Select
          name="Country"
          options={countries}
          currentRef={formFields.country}
          error={errors.country}
        />
      </div>
      <div className={classes.info__column}>
        <span className={classes.block__title}>Gender</span>
        <div className={classes.sex}>
          <Radio label={'Male'} name={'sex'} id={'male'} currentRef={formFields.male} />
          <Radio label={'Female'} name={'sex'} id={'female'} currentRef={formFields.female} />
          <span className={classes.sex__error}>{errors.sex}</span>
        </div>
      </div>
      <File name={'Add photo'} currentRef={formFields.photo} error={errors.photo} />
      <Checkbox
        name="All requirements are met according to the task."
        currentRef={formFields.check}
        error={errors.check}
      />
      <Button name={'Submit'} type={'submit'} classElement={classes.button} />
    </form>
  );
};

export default Form;
