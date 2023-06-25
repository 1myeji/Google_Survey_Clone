import { surveyQuestionState } from '../../store/surveyQuestionSlice';
import PreviewCheckbox from './PreviewCheckbox';
import PreviewDropDown from './PreviewDropDown';
import PreviewMultipleChoice from './PreviewMultipleChoice';
import PreviewTextAnswer from './PreviewTextAnswer';
import SurveyInfo from '../common/SurveyInfo';

interface IPreviewQuestionProps {
  question: surveyQuestionState;
}

const PreviewQuestion = ({ question }: IPreviewQuestionProps) => {
  const previewQuestionType = () => {
    switch (question.age) {
      case '10':
        return <PreviewTextAnswer question={question} width="300px" />;
      case '20':
        return <PreviewTextAnswer question={question} width="650px" />;
      case '30':
        return <PreviewMultipleChoice question={question} />;
      case '40':
        return <PreviewCheckbox question={question} />;
      case '50':
        return <PreviewDropDown question={question} />;
      default:
        return null;
    }
  };

  return <SurveyInfo>{previewQuestionType()}</SurveyInfo>;
};

export default PreviewQuestion;
