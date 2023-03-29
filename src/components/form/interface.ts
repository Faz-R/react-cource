import { FormFields } from '../../interface/FormFields';

export interface formErrors {
  firstName: string;
  secondName: string;
  date: string;
  country: string;
  sex: string;
  photo: string;
  check: string;
}

export interface formValid {
  firstName: boolean;
  secondName: boolean;
  date: boolean;
  country: boolean;
  sex: boolean;
  photo: boolean;
  check: boolean;
}

export type FormState = {
  info: FormFields;
  showMessage: boolean;
  errors: formErrors;
  valid: formValid;
};

export type FormProps = {
  getPersonCard: (personCard: FormFields) => void;
  class: string;
  currentRef: React.RefObject<HTMLFormElement>;
};
