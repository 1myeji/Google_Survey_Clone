import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { copyQuestion, deleteQuestion } from '../../store/surveyQuestionSlice';

interface ISurveyQuestionControlProps {
  id: number;
}

const SurveyQuestionControls = ({ id }: ISurveyQuestionControlProps) => {
  const dispatch = useDispatch();

  return (
    <ControlsWrapper>
      <Tooltip title="복사">
        <IconButton onClick={() => dispatch(copyQuestion(id))}>
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="삭제">
        <IconButton onClick={() => dispatch(deleteQuestion(id))}>
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>
      <Line />
      <FormControlLabel
        value="필수"
        control={<Switch color="secondary" />}
        label="필수"
        labelPlacement="start"
      />
      <Tooltip title="옵션 더보기">
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
    </ControlsWrapper>
  );
};

export default SurveyQuestionControls;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  border-top: 1px solid #dadce0;
  padding: 16px 8px 5px 0;
`;

const Line = styled.div`
  border-left: 1px solid #dadce0;
  height: 32px;
  margin: 0 16px;
  width: 0;
`;
