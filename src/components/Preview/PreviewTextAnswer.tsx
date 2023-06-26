import SurveyInput from '../common/SurveyInput';
import { useDispatch } from 'react-redux';
import { changeQuestionAnswer, surveyQuestionState } from '../../store/surveyQuestionSlice';

interface IPreviewTextAnswerProps {
  question: surveyQuestionState;
  width: '300px' | '650px';
}

const PreviewTextAnswer = ({ question, width }: IPreviewTextAnswerProps) => {
  const dispatch = useDispatch();

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuestionAnswer({ id: question.id, answer: event.target.value }));
  };

  return (
    <SurveyInput
      handleContentChange={handleAnswerChange}
      placeholder="내 답변"
      sx={{ marginLeft: '20px', marginTop: '30px', width }}
      IsDisableUnderline={false}
    />
  );
};

export default PreviewTextAnswer;
