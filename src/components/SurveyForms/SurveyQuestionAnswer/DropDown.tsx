import OptionGroup from './OptionGroup';

interface IDropDownProps {
  questionId: number;
}

const DropDown = ({ questionId }: IDropDownProps) => {
  return <OptionGroup type="dropdown" questionId={questionId} />;
};

export default DropDown;
