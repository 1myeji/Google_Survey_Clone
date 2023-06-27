import { surveyQuestionState } from '../../store/surveyQuestionSlice';
import RadioIcon from '../common/RadioIcon';
import styled from 'styled-components';
interface IPreviewMultipleChoiceProps {
  question: surveyQuestionState;
}

const PreviewMultipleChoice = ({ question }: IPreviewMultipleChoiceProps) => {
  return (
    <>
      {question.questionOptions.map((option, index) => (
        <OptionWrapper key={option.id}>
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

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 5px;
`;
