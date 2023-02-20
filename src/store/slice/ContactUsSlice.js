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
    setErrorEmail(state, action) {
      state.error.email = '* Must enter email address';
      state.error.emailField = 'bg-red-300';
    },
    setErrorReason(state, action) {
      state.error.reason = '* Please select reason';
      state.error.reasonField = 'bg-red-300';
    },
    setErrorMessage(state, action) {
      state.error.message = '* Please enter message here';
      state.error.messageField = 'bg-red-300';
    },
  },
});

export const {
  changeEmail,
  changeMessage,
  setErrorEmail,
  setErrorReason,
  setErrorMessage,
} = ContactUsSlice.actions;
export const contactReducer = ContactUsSlice.reducer;
