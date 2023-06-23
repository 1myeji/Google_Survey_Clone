import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Input from '@mui/material/Input';
import Radio from '@mui/material/Radio';
import styled from 'styled-components';

const ariaLabel = { 'aria-label': 'description' };

interface IRadioInputGroupProps {
  option: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;
  handleRadioBlur: () => void;
  handleOptionDelete: (optionDelete: number) => void;
}

const RadioInputGroup = ({
  option,
  handleChange,
  selectedValue,
  handleRadioBlur,
  handleOptionDelete,
}: IRadioInputGroupProps) => {
  return (
    <RadioInputGroupWrapper>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        onBlur={handleRadioBlur}
        disabled
      />
      <OptionInput
        defaultValue={`옵션 ${option}`}
        inputProps={ariaLabel}
        color="secondary"
        disableUnderline
      />
      <Tooltip title="삭제" onClick={() => handleOptionDelete(option)}>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </RadioInputGroupWrapper>
  );
};

export default RadioInputGroup;

const OptionInput = styled(Input)`
  width: 530px;
`;

const RadioInputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;
