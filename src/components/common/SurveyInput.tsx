import Input from '@mui/material/Input';
import { SxProps, Theme } from '@mui/material/styles';

const ariaLabel = { 'aria-label': 'description' };

interface ISurveyInputProps {
  value?: string;
  handleContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
  isDisableUnderline?: boolean;
}

const SurveyInput = ({
  value,
  handleContentChange,
  defaultValue,
  placeholder,
  sx,
  isDisableUnderline = true,
}: ISurveyInputProps) => {
  return (
    <Input
      inputProps={ariaLabel}
      color="secondary"
      disableUnderline={isDisableUnderline}
      value={value}
      defaultValue={defaultValue}
      onChange={handleContentChange}
      placeholder={placeholder}
      sx={sx}
    />
  );
};

export default SurveyInput;
