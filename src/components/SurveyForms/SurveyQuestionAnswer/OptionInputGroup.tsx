import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  changeOptionTitle,
  deleteOption,
  SurveyQuestionState,
} from '../../../store/surveyQuestionSlice';
import SurveyInput from '../../common/SurveyInput';

interface IOptionInputGroupProps {
  index: number;
  question: SurveyQuestionState;
  children: JSX.Element;
}

const OptionInputGroup = ({ index, question, children }: IOptionInputGroupProps) => {
  const dispatch = useDispatch();

  const handleOptionTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeOptionTitle({ id: question.id, index, title: event.target.value }));
  };

  const handleDeleteOption = () => {
    dispatch(deleteOption({ id: question.id, index }));
  };

  return (
    <OptionInputGroupWrapper>
      {children}
      <SurveyInput
        value={question.questionOptions[index].optionTitle || `옵션 ${index + 1}`}
        handleContentChange={handleOptionTitleChange}
        sx={{ width: '570px' }}
      />
      <Tooltip title="삭제" onClick={handleDeleteOption}>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </OptionInputGroupWrapper>
  );
};

export default OptionInputGroup;

const OptionInputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;
