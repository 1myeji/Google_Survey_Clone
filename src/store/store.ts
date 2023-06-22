import { configureStore } from '@reduxjs/toolkit';
import surveyInfo from './surveyInfoSlice';

export const store = configureStore({
  reducer: {
    surveyInfo: surveyInfo.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
