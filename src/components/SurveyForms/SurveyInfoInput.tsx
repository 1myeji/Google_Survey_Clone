import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeSurveyInfo } from '../../store/surveyInfoSlice';

const SurveyInfoInput = () => {
  const dispatch = useDispatch();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSurveyInfo({ type: 'title', value: event.target.value }));
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSurveyInfo({ type: 'description', value: event.target.value }));
  };

  return (
    <Header>
      <Title
        defaultValue="제목 없는 설문지"
        placeholder="설문지 제목"
        onChange={handleTitleChange}
      />
      <Description placeholder="설문지 설명" onChange={handleDescriptionChange} />
    </Header>
  );
};

export default SurveyInfoInput;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 30px 24px 24px 24px;
`;

const Title = styled.input`
  margin-bottom: 20px;
  font-size: 32px;
  padding-bottom: 8px;
`;

const Description = styled.input`
  padding-bottom: 5px;
  padding-left: 3px;
`;
