import styled from 'styled-components';
import SurveyQuestionHeader from './SurveyQuestionHeader';
import SurveyQuestionControls from './SurveyQuestionControls ';
import { useState } from 'react';
import SurveyQuestionAnswer from './SurveyQuestionAnswer';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Tooltip from '@mui/material/Tooltip';

const SurveyQuestion = () => {
  const [questions, setQuestions] = useState([{ id: Math.random() * 10, age: '30' }]);

  const handleAddQuestion = () => {
    setQuestions(prev => [...prev, { id: Math.random() * 10, age: '30' }]);
  };

  const handleQuestionDelete = (questionDelete: number) => {
    setQuestions(prev => prev.filter(question => question.id !== questionDelete));
  };

  const handleQuestionCopy = (questionCopyId: number) => {
    const questionCopy = questions.find(question => question.id === questionCopyId);
    if (questionCopy) {
      const newQuestion = { ...questionCopy, id: Math.random() * 10 };
      setQuestions(prev => [...prev, newQuestion]);
    }
  };

  const handleAgeChange = (id: number, age: string) => {
    setQuestions(prev =>
      prev.map(question => (question.id === id ? { ...question, age } : question)),
    );
  };

  console.log(questions);

  return (
    <SurveyQuestionBoxWrapper>
      <div>
        {questions.map(question => (
          <SurveyQuestionBox key={question.id}>
            <SurveyQuestionHeader
              id={question.id}
              age={question.age}
              handleAgeChange={handleAgeChange}
            />
            <SurveyQuestionAnswer age={question.age} />
            <SurveyQuestionControls
              handleQuestionDelete={() => handleQuestionDelete(question.id)}
              handleQuestionCopy={() => handleQuestionCopy(question.id)}
              question={question.id}
            />
          </SurveyQuestionBox>
        ))}
      </div>
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
