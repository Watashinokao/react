import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './redusers/dataSlice';
import { charactersAPI } from '../services/CharactersService';
const rootReducer = combineReducers({
  dataReducer,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(charactersAPI.middleware),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
