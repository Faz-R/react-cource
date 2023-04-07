import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonData } from '../../components/form/interface';

interface FormState {
  formInfo: PersonData[];
}

const initialState: FormState = {
  formInfo: [],
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<PersonData>) {
      state.formInfo = [...state.formInfo, action.payload];
    },
  },
});

export default FormSlice.reducer;
