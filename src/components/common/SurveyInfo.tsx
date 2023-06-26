import styled from 'styled-components';

interface SurveyInfoProps {
  children: React.ReactNode;
  includePurpleBox?: boolean;
  isEmpty?: boolean;
}

const SurveyInfo = ({ children, includePurpleBox = false, isEmpty }: SurveyInfoProps) => {
  return (
    <SectionContainer isEmpty={isEmpty}>
      {includePurpleBox && <PurpleBox></PurpleBox>}
      {children}
    </SectionContainer>
  );
};

export default SurveyInfo;

const SectionContainer = styled.section<{ isEmpty?: boolean }>`
  border: 1px solid #dadce0;
  border-color: ${({ isEmpty }) => (isEmpty ? 'red' : '#dadce0')};
  border-radius: 8px;
  background-color: #fff;
  width: 700px;
  margin-top: 10px;
  position: relative;
`;

const PurpleBox = styled.div`
  position: absolute;
  background-color: rgb(103, 58, 183);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: calc(100% + 2px);
  height: 10px;
  left: -1px;
  top: -1px;
`;
