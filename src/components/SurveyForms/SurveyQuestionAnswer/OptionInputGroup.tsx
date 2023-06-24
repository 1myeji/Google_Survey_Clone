import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Input from '@mui/material/Input';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  changeOptionTitle,
  deleteOption,
  surveyQuestionState,
} from '../../../store/surveyQuestionSlice';

const ariaLabel = { 'aria-label': 'description' };

interface IOptionInputGroupProps {
  index: number;
  id: number;
  options: surveyQuestionState;
  children: JSX.Element;
}

const OptionInputGroup = ({ index, id, options, children }: IOptionInputGroupProps) => {
  const dispatch = useDispatch();

  const handleOptionTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeOptionTitle({ id: options.id, index, title: event.target.value }));
  };

  return (
    <RadioInputGroupWrapper>
      {children}
      <OptionInput
        value={options.questionOptions[index].optionTitle || `옵션 ${index + 1}`}
        inputProps={ariaLabel}
        color="secondary"
        disableUnderline
        onChange={handleOptionTitleChange}
      />
      <Tooltip title="삭제" onClick={() => dispatch(deleteOption({ id: options.id, index }))}>
        <StyledIconButton>
          <ClearIcon />
        </StyledIconButton>
      </Tooltip>
    </RadioInputGroupWrapper>
  );
};

export default OptionInputGroup;

const OptionInput = styled(Input)`
  width: 530px;
`;

const RadioInputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 65px;
`;
