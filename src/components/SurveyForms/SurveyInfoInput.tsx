import styled from 'styled-components';

const SurveyInfoInput = () => {
  return (
    <Header>
      <Title defaultValue="제목 없는 설문지" placeholder="설문지 제목" />
      <Description placeholder="설문지 설명" />
    </Header>
  );
};

export default SurveyInfoInput;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-left: 24px;
`;

const Title = styled.input`
  margin-bottom: 20px;
  font-size: 32px;
  padding-bottom: 8px;
`;

const Description = styled.input`
  padding-bottom: 5px;
`;
