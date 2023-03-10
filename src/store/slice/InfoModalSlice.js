import { createSlice } from '@reduxjs/toolkit';

const InfoModalSlice = createSlice({
  name: 'infoModal',
  initialState: {
    infoToggle: false,
    confirmButtonToggle: false,
  },
  reducers: {
    toggleInfoModal(state) {
      state.infoToggle = !state.infoToggle;
    },
    toggleConfirmButton(state) {
      state.confirmButtonToggle = !state.confirmButtonToggle;
    },
  },
});

export const { toggleInfoModal, toggleConfirmButton } = InfoModalSlice.actions;
export const infoModalReducer = InfoModalSlice.reducer;
