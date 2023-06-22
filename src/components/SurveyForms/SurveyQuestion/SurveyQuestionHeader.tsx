import { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import EditFormatIcon from '../../common/EditFormatIcon';

const SurveyQuestionType = ['단답형', '장문형', '객관식 질문', '체크박스', '드롭다운'];

const SurveyQuestionHeader = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [age, setAge] = useState('30');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleTextFieldFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <>
      <DragIndicatorWrapper>
        <DragDropIndicatorIcon />
      </DragIndicatorWrapper>
      <TitleTextFieldWrapper>
        <TitleTextField
          placeholder="질문"
          id="filled-hidden-label-normal"
          variant="filled"
          multiline
          onFocus={handleTextFieldFocus}
          onBlur={handleTextFieldFocus}
        />
        <IconButton>
          <CropOriginalIcon />
        </IconButton>
        <FormControl sx={{ minWidth: 175, marginLeft: 2 }}>
          <Select value={age} onChange={handleChange}>
            {SurveyQuestionType.map((type, index) => (
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
  margin-left: 16px;
  margin-right: 16px;
  width: 414px;
  word-break: break-all;
  .MuiInputBase-root-hxnqRp {
    padding: 16px;
  }
  .Mui-focused:before {
    border-bottom: 2px solid rgb(103, 58, 183);
  }
  .Mui-focused:after {
    border-bottom: 2px solid rgb(103, 58, 183);
  }
`;

const DragDropIndicatorIcon = styled(DragIndicatorIcon)`
  transform: rotate(90deg);
`;

const DragIndicatorWrapper = styled.div`
  cursor: move;
  display: flex;
  justify-content: center;
  opacity: 0.2;
`;
