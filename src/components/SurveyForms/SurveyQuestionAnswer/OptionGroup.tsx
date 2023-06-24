import { useState } from 'react';
import styled from 'styled-components';
import OptionInputGroup from './OptionInputGroup';
import RadioIcon from '../../common/RadioIcon';
import CheckBoxIcon from '../../common/CheckBoxIcon';
import DropDownIcon from '../../common/DropDownIcon';

const optionType = {
  radio: RadioIcon,
  checkbox: CheckBoxIcon,
  dropdown: DropDownIcon,
};

interface IOptionGroupProps {
  type: 'radio' | 'checkbox' | 'dropdown';
}

const OptionGroup = ({ type }: IOptionGroupProps) => {
  const InputIcon = optionType[type];
  const [options, setOptions] = useState([1]);

  const handleAddOptionClick = () => {
    setOptions(prev => [...prev, prev.length + 1]);
  };

  const handleOptionDelete = (optionDelete: number) => {
    setOptions(prev => prev.filter(option => option !== optionDelete));
  };

  return (
    <OptionGroupWrapper>
      {options.map((option, index) => (
        <OptionInputGroup key={option} option={option} handleOptionDelete={handleOptionDelete}>
          <InputIcon value={`${index + 1}`} disabled={true} />
        </OptionInputGroup>
      ))}
      <InputGroupWrapper>
        <InputIcon disabled={true} value={String(options.length + 1)} />
        <AddOption onClick={handleAddOptionClick}>옵션 추가</AddOption>
      </InputGroupWrapper>
    </OptionGroupWrapper>
  );
};

export default OptionGroup;

const OptionGroupWrapper = styled.div`
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

const InputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
