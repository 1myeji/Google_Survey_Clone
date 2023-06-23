import { useState } from 'react';
import Radio from '@mui/material/Radio';
import Input from '@mui/material/Input';
import styled from 'styled-components';

const ariaLabel = { 'aria-label': 'description' };

const MultipleChoice = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleRadioBlur = () => {
    setSelectedValue('');
  };

  return (
    <MultipleChoiceWrapper>
      <RadioInputGroup>
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
          defaultValue="옵션 1"
          inputProps={ariaLabel}
          color="secondary"
          disableUnderline
        />
      </RadioInputGroup>
      <RadioInputGroup>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
          onBlur={handleRadioBlur}
          disabled
        />
        <AddOption>옵션 추가</AddOption>
      </RadioInputGroup>
    </MultipleChoiceWrapper>
  );
};

export default MultipleChoice;

const MultipleChoiceWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 60px;
`;

const OptionInput = styled(Input)`
  width: 530px;
`;

const AddOption = styled.span`
  opacity: 0.5;
  padding-bottom: 5px;
  :hover {
    border-bottom: 1px solid gray;
  }
`;

const RadioInputGroup = styled.div`
  display: flex;
  align-items: center;
`;
