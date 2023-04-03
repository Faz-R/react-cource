import { useState } from 'react';
import classes from './index.module.css';
import Form from '../../components/form';
import PersonCardsList from '../../components/personCardList';
import { PersonData } from '../../components/form/interface';

const FormPage = () => {
  const [infoCards, setInfoCards] = useState([] as PersonData[]);

  const handlePersonCard = (personCard: PersonData) => {
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
