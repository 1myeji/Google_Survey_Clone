import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Input from '@mui/material/Input';
import styled from 'styled-components';

const ariaLabel = { 'aria-label': 'description' };

interface IOptionInputGroupProps {
  option: number;
  handleOptionDelete: (optionDelete: number) => void;
  children: JSX.Element;
}

const OptionInputGroup = ({ option, handleOptionDelete, children }: IOptionInputGroupProps) => {
  return (
    <RadioInputGroupWrapper>
      {children}
      <OptionInput
        defaultValue={`옵션 ${option}`}
        inputProps={ariaLabel}
        color="secondary"
        disableUnderline
      />
      <Tooltip title="삭제" onClick={() => handleOptionDelete(option)}>
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
