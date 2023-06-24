import { configureStore } from '@reduxjs/toolkit';
import surveyInfo from './surveyInfoSlice';
import surveyQuestion from './surveyQuestionSlice';

export const store = configureStore({
  reducer: {
    surveyInfo: surveyInfo.reducer,
    surveyQuestion: surveyQuestion.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
