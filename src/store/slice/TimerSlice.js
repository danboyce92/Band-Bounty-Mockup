import { createSlice } from '@reduxjs/toolkit';

const TimerSlice = createSlice({
  name: 'timer',
  initialState: {
    timerDisplay: 'loading..',
    isRunning: true,
  },
  reducers: {
    stopTimer(state, action) {
      state.isRunning = !state.isRunning;
    },
  },
});

export const { stopTimer } = TimerSlice.actions;
export const timerReducer = TimerSlice.reducer;
