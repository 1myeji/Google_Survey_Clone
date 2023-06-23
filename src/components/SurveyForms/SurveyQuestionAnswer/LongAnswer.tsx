import styled from 'styled-components';

const LongAnswer = () => {
  return (
    <LongAnswerWrapper>
      <input type="text" placeholder="장문형 텍스트" disabled />
    </LongAnswerWrapper>
  );
};

export default LongAnswer;

const LongAnswerWrapper = styled.div`
  width: 580px;
  margin-top: 16px;
  margin-bottom: 60px;
  padding-bottom: 8px;
  border-bottom: 1px dotted lightgray;
`;
