import SurveyInfoInput from '../components/SurveyForms/SurveyInfoInput';
import SurveyQuestion from '../components/SurveyForms/SurveyQuestion';
import SurveyInfo from '../components/common/SurveyInfo';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const SurveyForms = () => {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate('/preview');
  };

  return (
    <>
      <Tooltip title="미리보기" placement="bottom" onClick={handlePreviewClick}>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
      <SurveyInfo includePurpleBox={true}>
        <SurveyInfoInput />
      </SurveyInfo>
      <SurveyQuestion />
    </>
  );
};

export default SurveyForms;
