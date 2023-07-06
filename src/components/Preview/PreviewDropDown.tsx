import { SurveyQuestionState, changeOptionCheck } from '../../store/surveyQuestionSlice';
import { useDispatch } from 'react-redux';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';

interface IPreviewDropDownProps {
  question: SurveyQuestionState;
}

const PreviewDropDown = ({ question }: IPreviewDropDownProps) => {
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeOptionCheck({ id: question.id, index: event.target.value }));
  };

  const value = String(question.questionOptions.findIndex(option => option.checked));
  const selectValue = value !== '-1' ? value : '';

  return (
    <DropDownWrapper>
      <FormControl sx={{ minWidth: 190, marginLeft: 2 }}>
        <Select value={selectValue} onChange={handleChange}>
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
  margin-top: 8px;
  margin-left: 5px;
`;
