import { createSlice } from "@reduxjs/toolkit";

const CreateModalSlice = createSlice({
    name: 'createModal',
    initialState: {
        toggle: false,
        artist: '',
        city: ''
    },
    reducers: {
        toggleModal(state, action) {
            state.toggle = !state.toggle;
        }
    }

});

export const { toggleModal } = CreateModalSlice.actions;
export const createModalReducer = CreateModalSlice.reducer;