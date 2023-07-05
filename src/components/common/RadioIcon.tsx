import Radio from '@mui/material/Radio';
import { useDispatch } from 'react-redux';
import { changeOptionCheck } from '../../store/surveyQuestionSlice';
import { SxProps, Theme } from '@mui/material/styles';

interface IRadioIconProps {
  value?: string;
  disabled: boolean;
  sx?: SxProps<Theme>;
  id?: number;
  index?: number;
  checked?: boolean;
}

const RadioIcon = ({ value, disabled, sx, id, index, checked }: IRadioIconProps) => {
  const dispatch = useDispatch();

  const handleCheckedChange = () => {
    dispatch(changeOptionCheck({ id, index }));
  };

  return (
    <Radio
      checked={checked}
      onChange={handleCheckedChange}
      value={value}
      name="radio-buttons"
      color="secondary"
      disabled={disabled}
      sx={sx}
    />
  );
};

export default RadioIcon;
