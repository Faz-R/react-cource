import classes from './index.module.css';
import { countries } from '../../utils/countries';
import Button from '../UI/button';
import Checkbox from '../UI/checkbox';
import InputText from '../UI/inputText';
import Radio from '../UI/radio';
import Select from '../UI/select';
import InputDate from '../UI/date';
import InputFile from '../UI/file';
import { ACTUAL__DATE, TEXT__REGEXP } from './constant';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FormValues, PersonData } from './interface';

type FormProps = {
  getPersonCard: (personCard: PersonData) => void;
  classForm: string;
};

const Form = ({ getPersonCard, classForm }: FormProps) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: 'onSubmit' });

  const onSubmit = (data: FormValues) => {
    setMessage(true);
    const result = { ...data, photo: URL.createObjectURL(data.photo[0]) };
    getPersonCard(result);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={`${classes.form} ${classForm}`} onSubmit={handleSubmit(onSubmit)}>
      {message ? (
        <div className={classes.message}>
          <span className={classes.message__text}>Information has been saved</span>
        </div>
      ) : (
        ''
      )}
      <div className={classes.info__row}>
        <InputText
          labelName="First name"
          register={{
            ...register('firstName', {
              required: 'Field is empty',
              pattern: { value: TEXT__REGEXP, message: 'Enter letters' },
              minLength: { value: 3, message: 'Enter 3 or more characters' },
            }),
          }}
          error={errors.firstName}
        />
        <InputText
          labelName="Second name"
          register={{
            ...register('secondName', {
              required: 'Field is empty',
              pattern: { value: TEXT__REGEXP, message: 'Enter letters' },
              minLength: { value: 3, message: 'Enter 3 or more characters' },
            }),
          }}
          error={errors.secondName}
        />
      </div>

      <div className={classes.info__row}>
        <InputDate
          labelName="Date of Birth"
          register={{
            ...register('date', {
              required: 'Field is empty',
              validate: (date) => new Date(date) <= ACTUAL__DATE || `Enter a date < current date`,
            }),
          }}
          error={errors.date}
        />
        <Select
          labelName="Country"
          options={countries}
          register={{
            ...register('country', {
              required: 'Field is empty',
            }),
          }}
          error={errors.country}
        />
      </div>
      <div className={classes.info__column}>
        <span className={classes.block__title}>Gender</span>
        <div className={classes.sex}>
          <Radio
            labelName="Male"
            register={{
              ...register('gender', {
                required: 'Choose gender',
              }),
            }}
            value="male"
          />
          <Radio
            labelName="Female"
            register={{
              ...register('gender', {
                required: 'Choose gender',
              }),
            }}
            value="female"
          />
          {errors.gender && <span className={classes.sex__error}>{errors.gender.message}</span>}
        </div>
      </div>
      <InputFile
        labelName="Add photo"
        register={{
          ...register('photo', {
            required: 'Upload a photo',
          }),
        }}
        error={errors.photo}
      />
      <Checkbox
        labelName="Consent to personal data processing"
        register={{
          ...register('check', {
            required: 'Accept terms',
          }),
        }}
        error={errors.check}
      />
      <Button name={'Submit'} type={'submit'} classElement={classes.button} />
    </form>
  );
};

export default Form;
