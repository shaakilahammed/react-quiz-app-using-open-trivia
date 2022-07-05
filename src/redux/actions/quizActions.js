import { QUIZ_CHANGE_QUESTION } from '../constants/quizConstants';

export const chengeQuestion = (index) => (dispatch) => {
  dispatch({ type: QUIZ_CHANGE_QUESTION, payload: index });
};
