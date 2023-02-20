import { createSlice } from '@reduxjs/toolkit';

const ContactUsSlice = createSlice({
  name: 'contact',
  initialState: {
    email: '',
    message: '',
    error: {
      email: '',
      emailField: '',
      reason: '',
      reasonField: '',
      message: '',
      messageField: '',
    },
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeMessage(state, action) {
      state.message = action.payload;
    },
    setErrorEmail(state) {
      state.error.email = '* Must enter email address';
      state.error.emailField = 'bg-red-300';
    },
    setErrorReason(state) {
      state.error.reason = '* Please select reason';
      state.error.reasonField = 'bg-red-300';
    },
    setErrorMessage(state) {
      state.error.message = '* Please enter message here';
      state.error.messageField = 'bg-red-300';
    },
    resetPage(state) {
      state.email = '';
      state.message = '';
      state.error.email = '';
      state.error.emailField = '';
      state.error.reason = '';
      state.error.reasonField = '';
      state.error.message = '';
      state.error.messageField = '';
    },
  },
});

export const {
  changeEmail,
  changeMessage,
  setErrorEmail,
  setErrorReason,
  setErrorMessage,
  resetPage,
} = ContactUsSlice.actions;
export const contactReducer = ContactUsSlice.reducer;
