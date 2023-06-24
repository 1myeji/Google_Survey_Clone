interface IPreviewMultipleChoiceProps {
  title: string;
}

const PreviewMultipleChoice = ({ title }: IPreviewMultipleChoiceProps) => {
  return <div>{title}</div>;
};

export default PreviewMultipleChoice;
