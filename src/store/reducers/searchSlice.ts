import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchWord: string;
}

const initialState: SearchState = {
  searchWord: '',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch(state, action: PayloadAction<string>) {
      state.searchWord = action.payload;
    },
  },
});

export default SearchSlice.reducer;
