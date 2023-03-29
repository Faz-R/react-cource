import { FormFields } from '../components/form/interface';

export function cardConvertation(personCard: FormFields) {
  return {
    firstName: personCard.firstName.current?.value,
    secondName: personCard.secondName.current?.value,
    date: personCard.date.current
      ? new Date(personCard.date.current.value).toLocaleDateString().toString()
      : '',
    country: personCard.country.current?.value,
    sex: personCard.female.current?.checked ? 'female' : 'male',
    photo:
      personCard.photo.current?.files && personCard.photo.current?.files[0]
        ? URL.createObjectURL(personCard.photo.current?.files[0] as File)
        : '',
    check: personCard.check.current?.checked,
  };
}
