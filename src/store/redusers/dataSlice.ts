import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataState } from '../../Interfaces/Interfaces';
import { charactersAPI } from '../../services/CharactersService';

const initialState: dataState = {
  request: localStorage.getItem('prevRequest') || '',
  page: window.location.search.slice(6) || '1',
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
      state.page = '1';
    },
    setIsDetails: (state, action: PayloadAction<boolean>) => {
      state.isDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      charactersAPI.endpoints.fetchAllCharacters.matchPending,
      (state, {}) => {
        state.isLoadingCards = true;
      }
    );
    builder.addMatcher(
      charactersAPI.endpoints.fetchAllCharacters.matchFulfilled,
      (state, { payload }) => {
        if (payload.data) {
          state.isLoadingCards = false;
        }
      }
    );
    builder.addMatcher(
      charactersAPI.endpoints.fetchCharacterById.matchPending,
      (state, {}) => {
        state.isLoadingDetails = true;
      }
    );
    builder.addMatcher(
      charactersAPI.endpoints.fetchCharacterById.matchFulfilled,
      (state, { payload }) => {
        if (payload.data) {
          state.isLoadingDetails = false;
        }
      }
    );
  },
});

export default dataSlice.reducer;
