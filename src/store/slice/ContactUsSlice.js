import { createSlice } from "@reduxjs/toolkit";

const ContactUsSlice = createSlice({
    name: 'contact',
    initialState: {
        email: '',
        message: ''
    },
    reducers: {
        changeEmail(state, action) {
            state.email = action.payload;

        },
        changeMessage(state, action) {
            state.message = action.payload;
        }
    }

});

export const { changeEmail, changeMessage } = ContactUsSlice.actions;
export const contactReducer = ContactUsSlice.reducer;