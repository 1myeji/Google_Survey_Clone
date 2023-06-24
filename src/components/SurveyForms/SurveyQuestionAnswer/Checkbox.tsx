import OptionGroup from './OptionGroup';

interface ICheckboxProps {
  questionId: number;
}

const Checkbox = ({ questionId }: ICheckboxProps) => {
  return <OptionGroup type="checkbox" questionId={questionId} />;
};

export default Checkbox;
