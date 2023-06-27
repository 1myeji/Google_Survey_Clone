import { useDispatch, useSelector } from 'react-redux';
import SurveyInfo from '../components/common/SurveyInfo';
import { RootState } from '../store/store';
import styled from 'styled-components';
import PreviewQuestion from '../components/Preview/PreviewQuestion';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetForm } from '../store/surveyQuestionSlice';

const Preview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const surveyInfo = useSelector((state: RootState) => state.surveyInfo);
  const surveyQuestion = useSelector((state: RootState) => state.surveyQuestion);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isRequiredAnswered = () => {
    return surveyQuestion.every(question => {
      if (!question.essential) return true;
      if (['10', '20'].includes(question.age)) return !!question.questionAnswer;
      if (['30', '40', '50'].includes(question.age)) {
        return question.questionOptions.some(option => option.checked);
      }
      return false;
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (isRequiredAnswered()) {
      navigate('/submit');
    }
  };

  const handleClearClick = () => {
    dispatch(resetForm());
  };

  return (
    <>
      <SurveyInfo includePurpleBox={true}>
        <Title>{surveyInfo.title}</Title>
        <Description>{surveyInfo.description}</Description>
      </SurveyInfo>
      {surveyQuestion.map(question => (
        <PreviewQuestion key={question.id} question={question} isSubmitted={isSubmitted} />
      ))}
      <ButtonContainer>
        <SubmitButton variant="contained" onClick={handleSubmit}>
          제출
        </SubmitButton>
        <ClearButton variant="outlined" onClick={handleClearClick}>
          양식 지우기
        </ClearButton>
      </ButtonContainer>
    </>
  );
};

export default Preview;

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
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  gap: 530px;
`;

const SubmitButton = styled(Button)`
  background-color: purple;
  color: white;
`;

const ClearButton = styled(Button)`
  color: purple;
  border: none;
  &:hover {
    border: none;
    background-color: lightgray;
  }
`;
