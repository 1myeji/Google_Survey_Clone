import styled from 'styled-components';

interface IDropDownIconProps {
  value?: string;
}

const DropDownIcon = ({ value }: IDropDownIconProps) => {
  return <DropDownNumber>{value}</DropDownNumber>;
};

export default DropDownIcon;

const DropDownNumber = styled.div`
  margin-right: 8px;
  position: relative;
  top: -2px;
`;
