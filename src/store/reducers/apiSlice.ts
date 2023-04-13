import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../components/card/interface';
import { getCardsApi } from '../../utils/getCardsApi';

export interface ApiState {
  items: ICard[];
  isLoading: boolean;
  errorApi: string;
}

const initialState: ApiState = {
  items: [],
  isLoading: false,
  errorApi: '',
};

export const ApiSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: {
    [getCardsApi.fulfilled.type]: (state, action: PayloadAction<ICard[]>) => {
      state.isLoading = false;
      state.errorApi = '';
      state.items = action.payload;
    },
    [getCardsApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCardsApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      console.log(action.payload);
      state.errorApi = action.payload;
    },
  },
});

export default ApiSlice.reducer;
