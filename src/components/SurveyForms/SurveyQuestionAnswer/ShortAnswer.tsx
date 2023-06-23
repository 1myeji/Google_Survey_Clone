import styled from 'styled-components';

const ShortAnswer = () => {
  return (
    <ShortAnswerWrapper>
      <input type="text" placeholder="단답형 텍스트" disabled />
    </ShortAnswerWrapper>
  );
};

export default ShortAnswer;

const ShortAnswerWrapper = styled.div`
  width: 360px;
  margin-top: 16px;
  margin-bottom: 60px;
  padding-bottom: 8px;
  border-bottom: 1px dotted lightgray;
`;
