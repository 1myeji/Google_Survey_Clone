import { useState } from 'react';
import Radio from '@mui/material/Radio';
import styled from 'styled-components';
import RadioInputGroup from './RadioInputGroup';

const MultipleChoice = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [options, setOptions] = useState([1]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleRadioBlur = () => {
    setSelectedValue('');
  };

  const handleAddOptionClick = () => {
    setOptions(prev => [...prev, prev.length + 1]);
  };

  const handleOptionDelete = (optionDelete: number) => {
    setOptions(prev => prev.filter(option => option !== optionDelete));
  };

  return (
    <MultipleChoiceWrapper>
      {options.map(option => (
        <RadioInputGroup
          key={option}
          option={option}
          handleChange={handleChange}
          selectedValue={selectedValue}
          handleRadioBlur={handleRadioBlur}
          handleOptionDelete={handleOptionDelete}
        />
      ))}
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
        <AddOption onClick={handleAddOptionClick}>옵션 추가</AddOption>
      </RadioInputGroupWrapper>
    </MultipleChoiceWrapper>
  );
};

export default MultipleChoice;

const MultipleChoiceWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const AddOption = styled.span`
  opacity: 0.5;
  padding-bottom: 5px;
  :hover {
    border-bottom: 1px solid gray;
    cursor: pointer;
  }
`;

const RadioInputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;
