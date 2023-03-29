import { useRef, useState } from 'react';
import classes from './index.module.css';
import Form from '../../components/form';

import { cardConvertation } from '../../utils/cardsConvertations';
import { PersonsData } from '../../interface/PersonsData';
import PersonCardsList from '../../components/personCardList';
import { FormFields } from '../../components/form/interface';

const FormPage = () => {
  const [infoCards, setInfoCards] = useState([] as PersonsData[]);
  const formRef = useRef(null);

  const handlePersonCard = (personCard: FormFields) => {
    setInfoCards([...infoCards, cardConvertation(personCard)]);
    formRef.current;
  };

  return (
    <>
      <h1 className="title">Form</h1>
      <section className={classes.section}>
        <Form getPersonCard={handlePersonCard} classForm={classes.form} currentRef={formRef} />
        <PersonCardsList cards={infoCards} class={classes.list} />
      </section>
    </>
  );
};

export default FormPage;
