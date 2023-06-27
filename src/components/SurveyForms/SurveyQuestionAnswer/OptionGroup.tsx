import styled from 'styled-components';
import OptionInputGroup from './OptionInputGroup';
import RadioIcon from '../../common/RadioIcon';
import CheckBoxIcon from '../../common/CheckBoxIcon';
import DropDownIcon from '../../common/DropDownIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addOption, reorderOptions } from '../../../store/surveyQuestionSlice';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const optionType = {
  radio: RadioIcon,
  checkbox: CheckBoxIcon,
  dropdown: DropDownIcon,
};

interface IOptionGroupProps {
  type: 'radio' | 'checkbox' | 'dropdown';
  questionId: number;
}

const OptionGroup = ({ type, questionId }: IOptionGroupProps) => {
  const InputIcon = optionType[type];
  const options = useSelector((state: RootState) =>
    state.surveyQuestion.find(question => question.id === questionId),
  );

  const dispatch = useDispatch();
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    dispatch(
      reorderOptions({
        questionId: questionId,
        startIndex: result.source.index,
        endIndex: result.destination.index,
      }),
    );
  };
  return (
    <OptionGroupWrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="options">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {options?.questionOptions.map((option, index) => (
                <Draggable key={String(option.id)} draggableId={String(option.id)} index={index}>
                  {provided => (
                    <Wrap ref={provided.innerRef} {...provided.draggableProps}>
                      <DragIndicatorWrapper {...provided.dragHandleProps}>
                        <DragIndicatorIcon />
                      </DragIndicatorWrapper>
                      <OptionInputGroup index={index} options={options}>
                        <InputIcon value={`${index + 1}`} disabled={true} />
                      </OptionInputGroup>
                    </Wrap>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <InputGroupWrapper>
        <InputIcon disabled={true} value={options && String(options.questionOptions.length + 1)} />
        <AddOption
          onClick={() => {
            dispatch(addOption({ questionId }));
          }}
        >
          옵션 추가
        </AddOption>
      </InputGroupWrapper>
    </OptionGroupWrapper>
  );
};

export default OptionGroup;

const OptionGroupWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`;

const AddOption = styled.span`
  opacity: 0.5;
  padding-bottom: 5px;
  :hover {
    border-bottom: 1px solid gray;
    cursor: pointer;
  }
`;

const InputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 24px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const DragIndicatorWrapper = styled.div`
  cursor: move !important;
  opacity: 0.2;
  padding-top: 2px;
`;
