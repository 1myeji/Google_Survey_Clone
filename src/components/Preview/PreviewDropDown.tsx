interface IPreviewDropDownProps {
  title: string;
}

const PreviewDropDown = ({ title }: IPreviewDropDownProps) => {
  return <div>{title}</div>;
};

export default PreviewDropDown;
