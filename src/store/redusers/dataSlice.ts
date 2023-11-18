import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface dataState {
  request: string;
  page: string;
  pageSize: string;
  isDetails: boolean;
  isLoadingDetails: boolean;
  isLoadingCards: boolean;
}
const initialState: dataState = {
  request: '',
  page: '',
  pageSize: '',
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
      state.page = action.payload;
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
