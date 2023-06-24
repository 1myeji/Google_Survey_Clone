import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface surveyInfoState {
  title: string;
  description: string;
}

interface ChangeInfoPayload {
  type: 'title' | 'description';
  value: string;
}

const initialState: surveyInfoState = {
  title: '제목 없는 설문지',
  description: '',
};

const surveyInfo = createSlice({
  name: 'surveyInfo',
  initialState,
  reducers: {
    changeSurveyInfo: (state, action: PayloadAction<ChangeInfoPayload>) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});

export const { changeSurveyInfo } = surveyInfo.actions;
export default surveyInfo;
