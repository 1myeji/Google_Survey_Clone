import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SurveyInfo from '../components/common/SurveyInfo';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { QuestionType, SurveyQuestionState } from '../store/surveyQuestionSlice';

const Submit = () => {
  const surveyInfo = useSelector((state: RootState) => state.surveyInfo);
  const surveyQuestion = useSelector((state: RootState) => state.surveyQuestion);

  const renderAnswer = (question: SurveyQuestionState) => {
    switch (question.questionType) {
      case QuestionType.ShortAnswer:
      case QuestionType.LongAnswer:
        return <p>{question.questionAnswer}</p>;
      case QuestionType.MultipleChoice:
      case QuestionType.Dropdown:
        return <p>{question.questionOptions.find(option => option.checked)?.optionTitle}</p>;
      case QuestionType.CheckBox:
        return question.questionOptions
          .filter(option => option.checked)
          .map(option => <p key={option.id}>{option.optionTitle}</p>);
      default:
        return null;
    }
  };

  return (
    <SurveyInfo includePurpleBox={true}>
      <Title>{surveyInfo.title}</Title>
      <Description>{surveyInfo.description}</Description>
      {surveyQuestion.map(question => (
        <AnswerWrapper key={question.id}>
          <TitleWrapper>
            <StyledButton variant="contained" color="secondary">
              제목
            </StyledButton>
            <h3>{question.questionTitle}</h3>
          </TitleWrapper>
          <SubmitWrapper>
            <StyledButton variant="contained" color="secondary">
              제출한 답변
            </StyledButton>
            {renderAnswer(question)}
          </SubmitWrapper>
        </AnswerWrapper>
      ))}
    </SurveyInfo>
  );
};

export default Submit;

const Title = styled.p`
  margin-top: 30px;
  font-size: 32px;
  padding-bottom: 8px;
  margin-left: 16px;
`;

const Description = styled.p`
  padding-bottom: 5px;
  padding-left: 3px;
  margin-left: 16px;
`;

const AnswerWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  border-radius: 4px;
  border: 1px solid rgb(240, 235, 248);
  gap: 10px;
`;

const StyledButton = styled(Button)`
  width: 110px;
  height: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SubmitWrapper = styled(TitleWrapper)``;
