import styled from 'styled-components';
import OptionInputGroup from './OptionInputGroup';
import RadioIcon from '../../common/RadioIcon';
import CheckBoxIcon from '../../common/CheckBoxIcon';
import DropDownIcon from '../../common/DropDownIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addOption } from '../../../store/surveyQuestionSlice';

const optionType = {
  radio: RadioIcon,
  checkbox: CheckBoxIcon,
  dropdown: DropDownIcon,
};

interface IOptionGroupProps {
  type: 'radio' | 'checkbox' | 'dropdown';
  questionId: number;
}

const OptionGroup = ({ type, questionId }: IOptionGroupProps) => {
  const InputIcon = optionType[type];
  const options = useSelector((state: RootState) =>
    state.surveyQuestion.find(question => question.id === questionId),
  );

  const dispatch = useDispatch();

  return (
    <OptionGroupWrapper>
      {options?.questionOptions.map((option, index) => (
        <OptionInputGroup key={option.id} index={index} options={options}>
          <InputIcon value={`${index + 1}`} disabled={true} />
        </OptionInputGroup>
      ))}
      <InputGroupWrapper>
        <InputIcon disabled={true} value={options && String(options.questionOptions.length + 1)} />
        <AddOption
          onClick={() => {
            dispatch(addOption({ questionId }));
          }}
        >
          옵션 추가
        </AddOption>
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
