import { configureStore } from '@reduxjs/toolkit';
import {
  contactReducer,
  changeEmail,
  changeMessage,
} from './slice/ContactUsSlice';
import {
  createModalReducer,
  toggleModal,
  changeArtist,
  changeCity,
} from './slice/CreateModalSlice';
import { timerReducer, setDisplay, stopTimer } from './slice/TimerSlice';

const store = configureStore({
  reducer: {
    contact: contactReducer,
    createModal: createModalReducer,
    timer: timerReducer,
  },
});

export {
  store,
  changeEmail,
  changeMessage,
  toggleModal,
  changeArtist,
  changeCity,
  setDisplay,
  stopTimer,
};
