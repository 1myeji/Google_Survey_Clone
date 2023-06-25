import { surveyQuestionState } from '../../store/surveyQuestionSlice';
import RadioIcon from '../common/RadioIcon';
import styled from 'styled-components';
interface IPreviewMultipleChoiceProps {
  question: surveyQuestionState;
}

const PreviewMultipleChoice = ({ question }: IPreviewMultipleChoiceProps) => {
  return (
    <>
      <MultiChoiceTitle>{question.questionTitle}</MultiChoiceTitle>
      {question.questionOptions.map((option, index) => (
        <OptionWrapper>
          <RadioIcon
            value={String(option.id)}
            disabled={false}
            sx={{ marginLeft: '6px' }}
            id={question.id}
            index={index}
            checked={option.checked}
          />
          <p>{option.optionTitle}</p>
        </OptionWrapper>
      ))}
    </>
  );
};

export default PreviewMultipleChoice;

const MultiChoiceTitle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
