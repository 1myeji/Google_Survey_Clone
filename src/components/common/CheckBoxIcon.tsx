import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface ICheckBoxIconProps {
  disabled: boolean;
}

const CheckBoxIcon = ({ disabled }: ICheckBoxIconProps) => {
  return (
    <div>
      <Checkbox {...label} color="secondary" disabled={disabled} />
    </div>
  );
};

export default CheckBoxIcon;
