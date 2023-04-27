import { useEffect, useState } from 'react';
import './index.css';
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
      <section className="section-form">
        <Form classForm={'section-form__form'} />
        <PersonCardsList cards={infoCards} classPerson={'section-form__list'} />
      </section>
    </>
  );
};

export default FormPage;
