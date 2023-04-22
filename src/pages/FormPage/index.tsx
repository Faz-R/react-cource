import { useEffect, useState } from 'react';
import classes from './index.module.css';
import Form from '../../components/form';
import PersonCardsList from '../../components/personCardList';
import { PersonData } from '../../components/form/interface';
import { useAppSelector } from '../../hooks/redux';

const FormPage = () => {
  const { formInfo } = useAppSelector((state) => state.formReducer);
  const [infoCards, setInfoCards] = useState(formInfo || ([] as PersonData[]));

  useEffect(() => {
    setInfoCards(formInfo);
  }, [formInfo]);

  return (
    <>
      <h1 className="title" data-testid="form-title">
        Form
      </h1>
      <section className={classes.section}>
        <Form classForm={classes.form} />
        <PersonCardsList cards={infoCards} classPerson={classes.list} />
      </section>
    </>
  );
};

export default FormPage;
