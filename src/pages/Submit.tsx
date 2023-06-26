import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SurveyInfo from '../components/common/SurveyInfo';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Submit = () => {
  const surveyInfo = useSelector((state: RootState) => state.surveyInfo);
  const surveyQuestion = useSelector((state: RootState) => state.surveyQuestion);

  return (
    <div>
      <SurveyInfo includePurpleBox={true}>
        <Title>{surveyInfo.title}</Title>
        <Description>{surveyInfo.description}</Description>
        {surveyQuestion.map(question => (
          <AnswerWrapper key={question.id}>
            <ButtonWrapper>
              <StyledButton variant="contained" color="secondary">
                제목
              </StyledButton>
              <h3>{question.questionTitle}</h3>
            </ButtonWrapper>
            <ButtonWrapper>
              <StyledButton variant="contained" color="secondary">
                제출한 답변
              </StyledButton>
              {question.age === '10' || question.age === '20' ? (
                <p>{question.questionAnswer}</p>
              ) : question.age === '30' || question.age === '50' ? (
                <p>{question.questionOptions.find(option => option.checked)?.optionTitle}</p>
              ) : question.age === '40' ? (
                question.questionOptions
                  .filter(option => option.checked)
                  .map(option => <p key={option.id}>{option.optionTitle}</p>)
              ) : null}
            </ButtonWrapper>
          </AnswerWrapper>
        ))}
      </SurveyInfo>
    </div>
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
