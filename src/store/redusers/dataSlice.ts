import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataState } from '../../Interfaces/Interfaces';

const initialState: dataState = {
  request: localStorage.getItem('prevRequest') || '',
  page: window.location.search.at(-1) || '1',
  pageSize: '10',
  isDetails: false,
  isLoadingDetails: false,
  isLoadingCards: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
    setPage: (state, action: PayloadAction<string>) => {
      if (action.payload === 'prev') {
        state.page = String(Number(state.page) - 1);
      }
      if (action.payload === 'next') {
        state.page = String(Number(state.page) + 1);
      }
    },
    setPageSize: (state, action: PayloadAction<string>) => {
      state.pageSize = action.payload;
    },
    setIsDetails: (state, action: PayloadAction<boolean>) => {
      state.isDetails = action.payload;
    },
    setIsLoadingDetails: (state, action: PayloadAction<boolean>) => {
      state.isLoadingDetails = action.payload;
    },
    setIsLoadingCards: (state, action: PayloadAction<boolean>) => {
      state.isLoadingCards = action.payload;
    },
  },
});

export default dataSlice.reducer;
