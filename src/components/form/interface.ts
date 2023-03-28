import { MutableRefObject } from 'react';

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

export interface FormFields {
  firstName: MutableRefObject<HTMLInputElement | null>;
  secondName: MutableRefObject<HTMLInputElement | null>;
  date: MutableRefObject<HTMLInputElement | null>;
  country: MutableRefObject<HTMLSelectElement | null>;
  male: MutableRefObject<HTMLInputElement | null>;
  female: MutableRefObject<HTMLInputElement | null>;
  photo: MutableRefObject<HTMLInputElement | null>;
  check: MutableRefObject<HTMLInputElement | null>;
}
