import { QuestionType } from '../../store/surveyQuestionSlice';
import Checkbox from './SurveyQuestionAnswer/Checkbox';
import DropDown from './SurveyQuestionAnswer/DropDown';
import LongAnswer from './SurveyQuestionAnswer/LongAnswer';
import MultipleChoice from './SurveyQuestionAnswer/MultipleChoice ';
import ShortAnswer from './SurveyQuestionAnswer/ShortAnswer';

interface ISurveyQuestionAnswerProps {
  questionType: string;
  questionId: number;
}

const SurveyQuestionAnswer = ({ questionType, questionId }: ISurveyQuestionAnswerProps) => {
  switch (questionType) {
    case QuestionType.ShortAnswer:
      return <ShortAnswer />;
    case QuestionType.LongAnswer:
      return <LongAnswer />;
    case QuestionType.MultipleChoice:
      return <MultipleChoice questionId={questionId} />;
    case QuestionType.CheckBox:
      return <Checkbox questionId={questionId} />;
    case QuestionType.Dropdown:
      return <DropDown questionId={questionId} />;
    default:
      return <div>올바른 질문 유형을 선택해주세요.</div>;
  }
};

export default SurveyQuestionAnswer;
