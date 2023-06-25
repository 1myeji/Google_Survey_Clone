import { surveyQuestionState, changeOptionCheck } from '../../store/surveyQuestionSlice';
import { useDispatch } from 'react-redux';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';

interface IPreviewDropDownProps {
  question: surveyQuestionState;
}

const PreviewDropDown = ({ question }: IPreviewDropDownProps) => {
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeOptionCheck({ id: question.id, index: event.target.value }));
  };

  return (
    <DropDownWrapper>
      <DropdownTitle>{question.questionTitle}</DropdownTitle>
      <FormControl sx={{ minWidth: 190, marginLeft: 2 }}>
        <Select
          value={String(question.questionOptions.findIndex(option => option.checked))}
          onChange={handleChange}
        >
          {question.questionOptions.map((option, index) => (
            <MenuItem value={index} key={option.id}>
              {option.optionTitle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </DropDownWrapper>
  );
};

export default PreviewDropDown;

const DropDownWrapper = styled.div`
  margin: 10px;
`;

const DropdownTitle = styled.div`
  margin: 20px 0 20px 20px;
`;
