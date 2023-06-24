import { useSelector } from 'react-redux';
import SurveyInfo from '../components/common/SurveyInfo';
import { RootState } from '../store/store';
import styled from 'styled-components';
import PreviewQuestion from '../components/SurveyForms/PreviewQuestion';

const Preview = () => {
  const surveyInfo = useSelector((state: RootState) => state.surveyInfo);
  const surveyQuestion = useSelector((state: RootState) => state.surveyQuestion);

  return (
    <>
      <SurveyInfo includePurpleBox={true}>
        <Title>{surveyInfo.title}</Title>
        <Description>{surveyInfo.description}</Description>
      </SurveyInfo>
      {surveyQuestion.map(question => (
        <PreviewQuestion key={question.id} question={question} />
      ))}
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
`;
