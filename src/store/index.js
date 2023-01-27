import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, changeEmail, changeMessage } from './slice/ContactUsSlice';
import { createModalReducer, toggleModal } from "./slice/CreateModalSlice";

const store = configureStore({
    reducer: {
        contact: contactReducer,
        createModal: createModalReducer 
    }
});

export { store, changeEmail, changeMessage, toggleModal }