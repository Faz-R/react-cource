import { useState } from 'react';
import classes from './index.module.css';
import Form from '../../components/form';
import PersonCardsList from '../../components/personCardList';
import { FormValues } from '../../components/form/interface';

const FormPage = () => {
  const [infoCards, setInfoCards] = useState([] as FormValues[]);

  const handlePersonCard = (personCard: FormValues) => {
    setInfoCards([...infoCards, personCard]);
  };

  return (
    <>
      <h1 className="title">Form</h1>
      <section className={classes.section}>
        <Form getPersonCard={handlePersonCard} classForm={classes.form} />
        <PersonCardsList cards={infoCards} classPerson={classes.list} />
      </section>
    </>
  );
};

export default FormPage;
