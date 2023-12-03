import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice/dataSlice';
const rootReducer = combineReducers({
  dataReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
