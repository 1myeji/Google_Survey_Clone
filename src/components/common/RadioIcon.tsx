import { useState } from 'react';
import Radio from '@mui/material/Radio';

interface IRadioIconProps {
  value?: string;
  disabled: boolean;
}

const RadioIcon = ({ value, disabled }: IRadioIconProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleRadioBlur = () => {
    setSelectedValue('');
  };

  return (
    <Radio
      checked={selectedValue === value}
      onChange={handleChange}
      value={value}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
      onBlur={handleRadioBlur}
      disabled={disabled}
    />
  );
};

export default RadioIcon;
