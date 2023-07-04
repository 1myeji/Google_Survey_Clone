import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { changeCheckBox } from '../../store/surveyQuestionSlice';
import { SxProps, Theme } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface ICheckBoxIconProps {
  disabled: boolean;
  id?: number;
  index?: number;
  checked?: boolean;
  sx?: SxProps<Theme>;
}

const CheckBoxIcon = ({ disabled, id, index, checked, sx }: ICheckBoxIconProps) => {
  const dispatch = useDispatch();

  const handleCheckedChange = () => {
    dispatch(changeCheckBox({ id, index }));
  };

  return (
    <div>
      <Checkbox
        {...label}
        color="secondary"
        checked={checked}
        onChange={handleCheckedChange}
        disabled={disabled}
        sx={sx}
      />
    </div>
  );
};

export default CheckBoxIcon;
