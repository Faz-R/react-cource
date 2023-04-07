import { ICard } from '../components/card/interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCardsApi = createAsyncThunk('items/fetchAll', async (search: string, thunkApi) => {
  try {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}`);
    const data = await response.json();
    const result = await data.data;
    const cardsArray: ICard[] = await result.map(async (e: { api_link: string }) => {
      const response = await fetch(e.api_link);
      const data = await response.json();
      const result = await data.data;
      return result;
    });
    const finish = await Promise.all(cardsArray);
    if (finish.length === 0) {
      return thunkApi.rejectWithValue('Sorry! No result found');
    } else {
      return finish;
    }
  } catch (error) {
    return thunkApi.rejectWithValue(`Sorry! An error has occurred: ${(error as Error).message}`);
  }
});
