import { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import EditFormatIcon from '../common/EditFormatIcon';
import { useDispatch } from 'react-redux';
import {
  changeQuestionType,
  changeQuestionTitle,
  QuestionType,
} from '../../store/surveyQuestionSlice';
import { DraggableProvided } from 'react-beautiful-dnd';
import { SelectChangeEvent } from '@mui/material/Select';

const surveyQuestionType = ['단답형', '장문형', '객관식 질문', '체크박스', '드롭다운'];

interface ISurveyQuestionHeaderProps {
  id: number;
  questionType:
    | QuestionType.ShortAnswer
    | QuestionType.LongAnswer
    | QuestionType.MultipleChoice
    | QuestionType.CheckBox
    | QuestionType.Dropdown;
  title: string;
  dragHandleProps: DraggableProvided['dragHandleProps'];
}

const SurveyQuestionHeader = ({
  id,
  questionType,
  title,
  dragHandleProps,
}: ISurveyQuestionHeaderProps) => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);

  const handleTextFieldFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleQuestionTitleChange =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeQuestionTitle({
          id,
          title: event.target.value,
        }),
      );
    };

  const handleQuestionTypeChange = (id: number) => (event: SelectChangeEvent) => {
    dispatch(
      changeQuestionType({
        id,
        questionType: String(event.target.value),
      }),
    );
  };

  return (
    <>
      <DragIndicatorWrapper {...dragHandleProps}>
        <DragDropIndicatorIcon />
      </DragIndicatorWrapper>
      <TitleTextFieldWrapper>
        <TitleTextField
          placeholder="질문"
          value={title}
          variant="filled"
          multiline
          color="secondary"
          onFocus={handleTextFieldFocus}
          onBlur={handleTextFieldFocus}
          onChange={handleQuestionTitleChange(id)}
        />
        <IconButton>
          <CropOriginalIcon />
        </IconButton>
        <FormControl sx={{ minWidth: 190, marginLeft: 2 }}>
          <Select value={questionType} onChange={handleQuestionTypeChange(id)}>
            {surveyQuestionType.map((type, index) => (
              <MenuItem value={(index + 1) * 10} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TitleTextFieldWrapper>
      <EditFormatIcon isFocused={isFocused} />
    </>
  );
};

export default SurveyQuestionHeader;

const TitleTextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleTextField = styled(TextField)`
  margin-right: 16px;
  width: 414px;
  word-break: break-all;
  .MuiInputBase-root-hxnqRp {
    padding: 16px;
  }
`;

const DragDropIndicatorIcon = styled(DragIndicatorIcon)`
  transform: rotate(90deg);
`;

const DragIndicatorWrapper = styled.div`
  cursor: move !important;
  display: flex;
  justify-content: center;
  opacity: 0.2;
`;
