import { createSlice } from '@reduxjs/toolkit';

export interface surveyQuestionState {
  id: number;
  age: string;
  questionTitle: string;
  questionAnswer: string;
  questionOptions: {
    id: number;
    optionTitle: string;
    checked: boolean;
  }[];
  essential: boolean;
}

const initialState: surveyQuestionState[] = [
  {
    id: Date.now(),
    age: '30',
    questionTitle: '',
    questionAnswer: '',
    questionOptions: [{ id: Date.now(), optionTitle: '옵션1', checked: false }],
    essential: false,
  },
];

const surveyQuestion = createSlice({
  name: 'surveyQuestion',
  initialState,
  reducers: {
    addQuestion: state => {
      state.push({
        id: Date.now(),
        age: '30',
        questionTitle: '',
        questionAnswer: '',
        questionOptions: [{ id: Date.now(), optionTitle: '옵션1', checked: false }],
        essential: false,
      });
    },

    deleteQuestion: (state, action) => {
      return state.filter(question => question.id !== action.payload);
    },

    copyQuestion: (state, action) => {
      const questionIndex = state.findIndex(question => question.id === action.payload);
      if (questionIndex !== -1) {
        const questionCopy = JSON.parse(JSON.stringify(state[questionIndex]));
        (questionCopy.id = Date.now()), state.splice(questionIndex + 1, 0, questionCopy);
      }
    },

    changeAge: (state, action) => {
      const { id, age } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) question.age = age;
    },

    changeQuestionTitle: (state, action) => {
      const { id, title } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) question.questionTitle = title;
    },

    addOption: (state, action) => {
      const { questionId } = action.payload;
      const question = state.find(question => question.id === questionId);
      if (question) {
        question.questionOptions.push({
          id: Date.now(),
          optionTitle: `옵션${question.questionOptions.length + 1}`,
          checked: false,
        });
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

    toggleEssential: (state, action) => {
      const { id } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) {
        question.essential = !question.essential;
      }
    },

    changeQuestionAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) {
        question.questionAnswer = answer;
      }
    },

    changeOptionCheck: (state, action) => {
      const { id, index } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) {
        question.questionOptions.forEach(option => {
          option.checked = false;
        });
        question.questionOptions[index].checked = true;
      }
    },

    changeCheckBox: (state, action) => {
      const { id, index } = action.payload;
      const question = state.find(question => question.id === id);
      if (question) {
        question.questionOptions[index].checked = !question.questionOptions[index].checked;
      }
    },

    resetForm: state => {
      state.forEach(question => {
        question.questionAnswer = '';
        if (question.questionOptions) {
          question.questionOptions.forEach(option => {
            option.checked = false;
          });
        }
      });
    },

    reorderQuestions: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removed);
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
  toggleEssential,
  changeQuestionAnswer,
  changeOptionCheck,
  changeCheckBox,
  resetForm,
  reorderQuestions,
} = surveyQuestion.actions;
export default surveyQuestion;
