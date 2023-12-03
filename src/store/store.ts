import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice/dataSlice';
import { countries } from '../countries/countries';
const rootReducer = combineReducers({
  dataReducer,
  countries: () => countries,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
