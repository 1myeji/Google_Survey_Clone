import Checkbox from './SurveyQuestionAnswer/Checkbox';
import DropDown from './SurveyQuestionAnswer/DropDown';
import LongAnswer from './SurveyQuestionAnswer/LongAnswer';
import MultipleChoice from './SurveyQuestionAnswer/MultipleChoice ';
import ShortAnswer from './SurveyQuestionAnswer/ShortAnswer';

interface ISurveyQuestionAnswerProps {
  age: string;
  questionId: number;
}

const SurveyQuestionAnswer = ({ age, questionId }: ISurveyQuestionAnswerProps) => {
  switch (age) {
    case '10':
      return <ShortAnswer />;
    case '20':
      return <LongAnswer />;
    case '30':
      return <MultipleChoice questionId={questionId} />;
    case '40':
      return <Checkbox questionId={questionId} />;
    case '50':
      return <DropDown questionId={questionId} />;
    default:
      return <div>올바른 질문 유형을 선택해주세요.</div>;
  }
};

export default SurveyQuestionAnswer;
