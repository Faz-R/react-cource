import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice';
import formReducer from './reducers/formSlice';
import { itemApi } from './reducers/ItemService';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
  [itemApi.reducerPath]: itemApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
