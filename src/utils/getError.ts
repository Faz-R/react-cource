import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

type Error = FetchBaseQueryError | SerializedError | undefined;

export const getError = (error: Error, lenght: boolean) => {
  if (error) {
    if ('status' in error) {
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
      return `An error has occurred! ${errMsg}`;
    } else {
      return error.message;
    }
  }
  if (lenght) {
    return 'Sorry! No results found';
  }
  return '';
};
