import { surveyQuestionState } from '../../store/surveyQuestionSlice';
import CheckBoxIcon from '../common/CheckBoxIcon';
import styled from 'styled-components';

interface IPreviewCheckboxProps {
  question: surveyQuestionState;
}

const PreviewCheckbox = ({ question }: IPreviewCheckboxProps) => {
  return (
    <>
      <CheckboxTitle>{question.questionTitle}</CheckboxTitle>
      {question.questionOptions.map((option, index) => (
        <OptionWrapper>
          <CheckBoxIcon
            disabled={false}
            id={question.id}
            index={index}
            checked={option.checked}
            sx={{ marginLeft: '10px' }}
          />
          <p>{option.optionTitle}</p>
        </OptionWrapper>
      ))}
    </>
  );
};

export default PreviewCheckbox;

const CheckboxTitle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
