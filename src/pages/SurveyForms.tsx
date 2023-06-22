import SurveyInfoInput from '../components/SurveyForms/SurveyInfoInput';
import SurveyQuestion from '../components/SurveyForms/SurveyQuestion/SurveyQuestion';
import SurveyInfo from '../components/common/SurveyInfo';

const SurveyForms = () => {
  return (
    <>
      <SurveyInfo>
        <SurveyInfoInput />
      </SurveyInfo>
      <SurveyQuestion />
    </>
  );
};

export default SurveyForms;
