import OptionGroup from './OptionGroup';

interface IMultipleChoiceProps {
  questionId: number;
}

const MultipleChoice = ({ questionId }: IMultipleChoiceProps) => {
  return <OptionGroup type="radio" questionId={questionId} />;
};

export default MultipleChoice;
