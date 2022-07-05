import { CHANGE_ANSWER } from '../constants/quizConstants';

export const chengeAnswer = (question, answer) => (dispatch, getState) => {
  const answersArray = [...getState().answers];
  const existQuestionIndex = answersArray.findIndex(
    (ans) => ans.id === question.id
  );

  const existQuestion = answersArray[existQuestionIndex];
  if (existQuestion) {
    const updatedAnswer = {
      ...existQuestion,
      answer: answer,
    };
    answersArray[existQuestionIndex] = { ...updatedAnswer };
  } else {
    answersArray.push({
      id: question.id,
      question: question.question,
      answer: answer,
      correctAnswer: question.correct_answer,
      options: [...question.options],
    });
  }
  dispatch({ type: CHANGE_ANSWER, payload: answersArray });
};
