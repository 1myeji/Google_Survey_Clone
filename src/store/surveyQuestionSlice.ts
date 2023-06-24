import { createSlice } from '@reduxjs/toolkit';

interface surveyQuestionState {
  id: number;
  age: string;
  questionTitle: string;
  questionOptions: {
    optionTitle: string;
  }[];
}

const initialState: surveyQuestionState[] = [
  {
    id: Math.random() * 10,
    age: '30',
    questionTitle: '',
    questionOptions: [{ optionTitle: '' }],
  },
];

const surveyQuestion = createSlice({
  name: 'surveyQuestion',
  initialState,
  reducers: {
    addQuestion(state) {
      state.push({
        id: Math.random() * 10,
        age: '30',
        questionTitle: '',
        questionOptions: [{ optionTitle: '' }],
      });
    },
    deleteQuestion(state, action) {
      return state.filter(question => question.id !== action.payload);
    },
    copyQuestion(state, action) {
      const questionCopy = state.find(question => question.id === action.payload);
      if (questionCopy) state.push({ ...questionCopy, id: Math.random() * 10 });
    },
    changeAge(state, action) {
      const { id, age } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) question.age = age;
    },
    changeQuestionTitle(state, action) {
      const { id, title } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) question.questionTitle = title;
    },
  },
});

export const { addQuestion, deleteQuestion, copyQuestion, changeAge, changeQuestionTitle } =
  surveyQuestion.actions;
export default surveyQuestion;
