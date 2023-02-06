import { createSlice } from '@reduxjs/toolkit';

const TimerSlice = createSlice({
  name: 'timer',
  initialState: {
    timerDisplay: 'loading..',
    isRunning: true,
  },
  reducers: {
    setDisplay(state, action) {
      state.timerDisplay = action.payload;
    },
    stopTimer(state, action) {
      state.isRunning = !state.isRunning;
    },
  },
});

export const { setDisplay, stopTimer } = TimerSlice.actions;
export const timerReducer = TimerSlice.reducer;
