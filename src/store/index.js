import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, changeEmail, changeMessage } from './slice/ContactUsSlice';


const store = configureStore({
    reducer: {
        contact: contactReducer
    }
});

export { store, changeEmail, changeMessage }