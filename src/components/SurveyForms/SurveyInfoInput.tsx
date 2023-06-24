import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeSurveyInfo } from '../../store/surveyInfoSlice';
import SurveyInput from '../common/SurveyInput';

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
      <SurveyInput
        defaultValue="제목 없는 설문지"
        handleContentChange={handleTitleChange}
        sx={{ fontSize: '32px', paddingBottom: '8px' }}
      />
      <SurveyInput
        placeholder="설문지 설명"
        handleContentChange={handleDescriptionChange}
        sx={{ paddingBottom: '5px', paddingLeft: '3px' }}
      />
    </Header>
  );
};

export default SurveyInfoInput;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 30px 24px 24px 24px;
`;
