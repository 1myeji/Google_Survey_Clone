import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  changeOptionTitle,
  deleteOption,
  surveyQuestionState,
} from '../../../store/surveyQuestionSlice';
import SurveyInput from '../../common/SurveyInput';

interface IOptionInputGroupProps {
  index: number;
  options: surveyQuestionState;
  children: JSX.Element;
}

const OptionInputGroup = ({ index, options, children }: IOptionInputGroupProps) => {
  const dispatch = useDispatch();

  const handleOptionTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeOptionTitle({ id: options.id, index, title: event.target.value }));
  };

  return (
    <RadioInputGroupWrapper>
      {children}
      <SurveyInput
        value={options.questionOptions[index].optionTitle || `옵션 ${index + 1}`}
        handleContentChange={handleOptionTitleChange}
        sx={{ width: '570px' }}
      />
      <Tooltip title="삭제" onClick={() => dispatch(deleteOption({ id: options.id, index }))}>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </RadioInputGroupWrapper>
  );
};

export default OptionInputGroup;

const RadioInputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;
