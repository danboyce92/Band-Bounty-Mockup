import { createSlice } from '@reduxjs/toolkit';

const CurrentBountySlice = createSlice({
  name: 'currentBounty',
  initialState: {
    bounty: {},
  },
  reducers: {
    changeCurrentBounty(state, action) {
      state.bounty = action.payload;
    },
  },
});

export const { changeCurrentBounty } = CurrentBountySlice.actions;
export const currentBountyReducer = CurrentBountySlice.reducer;
