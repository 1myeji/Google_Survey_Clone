import styled from 'styled-components';
import SurveyQuestionHeader from './SurveyQuestionHeader';
import SurveyQuestionControls from './SurveyQuestionControls ';

const SurveyQuestion = () => {
  return (
    <SurveyQuestionBox>
      <SurveyQuestionHeader />
      <div style={{ height: '100px' }}>안녕하세요</div>
      <SurveyQuestionControls />
    </SurveyQuestionBox>
  );
};

export default SurveyQuestion;

const SurveyQuestionBox = styled.section`
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.141),
    0 1px 3px 0 rgba(0, 0, 0, 0.122);
  margin-top: 12px;
  padding: 0px 15px 15px 15px;
`;
