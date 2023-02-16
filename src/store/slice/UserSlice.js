import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    changeUser(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { changeUser } = UserSlice.actions;
export const userSliceReducer = UserSlice.reducer;
