import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface formData {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword?: string;
  gender: string;
  picture: string;
  country: string;
  terms_conditions: boolean;
}

interface cardState {
  cards: formData[];
}

const initialState: cardState = {
  cards: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<formData>) => {
      state.cards.push(action.payload);
    },
  },
});

export default dataSlice.reducer;
