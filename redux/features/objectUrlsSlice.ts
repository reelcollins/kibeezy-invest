// features/objectUrlsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

export const objectUrlsSlice = createSlice({
  name: 'objectUrls',
  initialState,
  reducers: {
    addObjectUrls(state, action) {
      state.push(...action.payload);
    },
    // Add other reducers as needed, e.g., for clearing or removing URLs
  },
});

export const { addObjectUrls } = objectUrlsSlice.actions;

export default objectUrlsSlice.reducer;
