import { surveyQuestionState } from '../../store/surveyQuestionSlice';
import PreviewCheckbox from './PreviewCheckbox';
import PreviewDropDown from './PreviewDropDown';
import PreviewMultipleChoice from './PreviewMultipleChoice';
import PreviewTextAnswer from './PreviewTextAnswer';
import SurveyInfo from '../common/SurveyInfo';
import styled from 'styled-components';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface IPreviewQuestionProps {
  question: surveyQuestionState;
  isSubmitted: boolean;
}

const PreviewQuestion = ({ question, isSubmitted }: IPreviewQuestionProps) => {
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

  const isQuestionEmpty = () => {
    if (!isSubmitted || !question.essential) {
      return false;
    }
    switch (question.age) {
      case '10':
      case '20':
        return !question.questionAnswer;
      case '30':
      case '40':
      case '50':
        return !question.questionOptions.some(option => option.checked);
      default:
        return false;
    }
  };

  const isEmpty = isQuestionEmpty();

  return (
    <SurveyInfo isEmpty={isEmpty}>
      <QuestionTitle>
        {question.questionTitle}
        {question.essential && <RequiredIndicator>*</RequiredIndicator>}
      </QuestionTitle>
      <AnswerWrapper>
        {previewQuestionType()}
        {isEmpty && (
          <ErrorWrapper>
            <ErrorOutlineIcon color="warning" />
            <ErrorMessage>필수 질문입니다.</ErrorMessage>
          </ErrorWrapper>
        )}
      </AnswerWrapper>
    </SurveyInfo>
  );
};

export default PreviewQuestion;

const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const RequiredIndicator = styled.span`
  color: red;
  margin-left: 4px;
`;

const AnswerWrapper = styled.div`
  margin-bottom: 20px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 17px;
`;

const ErrorMessage = styled.p`
  color: #d93025;
  font-size: 13px;
`;
