import { createSlice } from '@reduxjs/toolkit';

export interface surveyQuestionState {
  id: number;
  age: string;
  questionTitle: string;
  questionOptions: {
    id: number;
    optionTitle: string;
  }[];
  essential: boolean;
}

const initialState: surveyQuestionState[] = [
  {
    id: Math.random() * 10,
    age: '30',
    questionTitle: '',
    questionOptions: [{ id: Date.now(), optionTitle: '' }],
    essential: false,
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
        questionOptions: [{ id: Date.now(), optionTitle: '' }],
        essential: false,
      });
    },

    deleteQuestion(state, action) {
      return state.filter(question => question.id !== action.payload);
    },

    copyQuestion(state, action) {
      const questionIndex = state.findIndex(question => question.id === action.payload);
      if (questionIndex !== -1) {
        const questionCopy = JSON.parse(JSON.stringify(state[questionIndex]));
        questionCopy.id = Math.random() * 10;
        state.splice(questionIndex + 1, 0, questionCopy);
      }
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

    addOption: (state, action) => {
      const { questionId } = action.payload;
      const question = state.find(question => question.id === questionId);
      if (question) {
        question.questionOptions.push({ id: Date.now(), optionTitle: '' });
      }
    },

    deleteOption: (state, action) => {
      const { id, index } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) {
        question.questionOptions.splice(index, 1);
      }
    },

    changeOptionTitle: (state, action) => {
      const { id, index, title } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) {
        question.questionOptions[index].optionTitle = title;
      }
    },
  },
});

export const {
  addQuestion,
  deleteQuestion,
  copyQuestion,
  changeAge,
  changeQuestionTitle,
  addOption,
  deleteOption,
  changeOptionTitle,
} = surveyQuestion.actions;
export default surveyQuestion;
