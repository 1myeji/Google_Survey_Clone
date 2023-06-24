import Input from '@mui/material/Input';
import styled from 'styled-components';

const ariaLabel = { 'aria-label': 'description' };

interface ISurveyInputProps {
  value?: string;
  handleContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  sx?: any;
}

const SurveyInput = ({
  value,
  handleContentChange,
  defaultValue,
  placeholder,
  sx,
}: ISurveyInputProps) => {
  return (
    <OptionInput
      inputProps={ariaLabel}
      color="secondary"
      disableUnderline
      value={value}
      defaultValue={defaultValue}
      onChange={handleContentChange}
      placeholder={placeholder}
      sx={sx}
    />
  );
};

export default SurveyInput;

const OptionInput = styled(Input)`
  width: 530px;
`;
