import styled from 'styled-components';
import SurveyQuestionHeader from './SurveyQuestionHeader';
import SurveyQuestionControls from './SurveyQuestionControls ';
import SurveyQuestionAnswer from './SurveyQuestionAnswer';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, reorderQuestions } from '../../store/surveyQuestionSlice';
import { RootState } from '../../store/store';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

const SurveyQuestion = () => {
  const questions = useSelector((state: RootState) => state.surveyQuestion);
  const dispatch = useDispatch();

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    dispatch(
      reorderQuestions({
        startIndex: result.source.index,
        endIndex: result.destination.index,
      }),
    );
  };

  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  return (
    <SurveyQuestionBoxWrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="questions">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {questions.map((question, index) => (
                <Draggable
                  key={String(question.id)}
                  draggableId={String(question.id)}
                  index={index}
                >
                  {provided => (
                    <SurveyQuestionBox ref={provided.innerRef} {...provided.draggableProps}>
                      <SurveyQuestionHeader
                        dragHandleProps={provided.dragHandleProps}
                        id={question.id}
                        age={question.age}
                        title={question.questionTitle}
                      />
                      <SurveyQuestionAnswer age={question.age} questionId={question.id} />
                      <SurveyQuestionControls id={question.id} essential={question.essential} />
                    </SurveyQuestionBox>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddQuestionWrapper>
        <Tooltip title="질문 추가" placement="right">
          <StyledControlPointIcon onClick={handleAddQuestion} />
        </Tooltip>
      </AddQuestionWrapper>
    </SurveyQuestionBoxWrapper>
  );
};

export default SurveyQuestion;

const SurveyQuestionBoxWrapper = styled.div`
  display: flex;
  position: relative;
`;

const SurveyQuestionBox = styled.section`
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.141),
    0 1px 3px 0 rgba(0, 0, 0, 0.122);
  margin-top: 12px;
  padding: 0px 15px 15px 15px;
`;

const AddQuestionWrapper = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  position: absolute;
  right: -60px;
  top: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledControlPointIcon = styled(ControlPointIcon)`
  cursor: pointer;
  opacity: 0.5;
`;
