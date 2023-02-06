import { createSlice } from '@reduxjs/toolkit';

const CreateModalSlice = createSlice({
  name: 'createModal',
  initialState: {
    toggle: false,
    artist: '',
    city: '',
    bountyNumber: null,
  },
  reducers: {
    toggleModal(state, action) {
      state.toggle = !state.toggle;
    },
    changeArtist(state, action) {
      state.artist = action.payload;
    },
    changeCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const { toggleModal, changeArtist, changeCity } =
  CreateModalSlice.actions;
export const createModalReducer = CreateModalSlice.reducer;
