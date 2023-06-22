import styled from 'styled-components';
import SurveyQuestionHeader from './SurveyQuestionHeader';

const SurveyQuestion = () => {
  return (
    <SurveyQuestionBox>
      <SurveyQuestionHeader />
    </SurveyQuestionBox>
  );
};

export default SurveyQuestion;

const SurveyQuestionBox = styled.section`
  /* width, height 일단 임의로 지정 */
  width: 700px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.141),
    0 1px 3px 0 rgba(0, 0, 0, 0.122);
  margin-top: 12px;
`;
