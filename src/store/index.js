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
import {
  infoModalReducer,
  toggleInfoModal,
  toggleConfirmButton,
} from './slice/InfoModalSlice';
import {
  changeCurrentBounty,
  setBountyBio,
  setBountyLogo,
  currentBountyReducer,
} from './slice/CurrentBountySlice';
import { timerReducer, stopTimer } from './slice/TimerSlice';

const store = configureStore({
  reducer: {
    contact: contactReducer,
    createModal: createModalReducer,
    infoModal: infoModalReducer,
    currentBounty: currentBountyReducer,
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
  toggleInfoModal,
  toggleConfirmButton,
  changeCurrentBounty,
  setBountyBio,
  setBountyLogo,
  stopTimer,
};
