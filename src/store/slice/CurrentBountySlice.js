import { createSlice } from '@reduxjs/toolkit';

const CurrentBountySlice = createSlice({
  name: 'currentBounty',
  initialState: {
    bounty: {},
    bio: '',
    logo: '',
  },
  reducers: {
    changeCurrentBounty(state, action) {
      state.bounty = action.payload;
    },
    setBountyBio(state, action) {
      state.bio = action.payload;
    },
    setBountyLogo(state, action) {
      state.logo = action.payload;
    },
  },
});

export const { changeCurrentBounty, setBountyBio, setBountyLogo } =
  CurrentBountySlice.actions;
export const currentBountyReducer = CurrentBountySlice.reducer;
