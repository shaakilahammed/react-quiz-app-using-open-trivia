import {
  QUIZ_CHANGE_QUESTION,
  QUIZ_FAIL,
  QUIZ_REQUEST,
  QUIZ_SUCCESS,
} from '../constants/quizConstants';

export const quizReducer = (
  state = { questions: [], currentQuestionIndex: 0 },
  action
) => {
  switch (action.type) {
    case QUIZ_REQUEST:
      return { ...state, loading: true, questions: [] };
    case QUIZ_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case QUIZ_FAIL:
      return { ...state, loading: false, error: action.payload };
    case QUIZ_CHANGE_QUESTION:
      return { ...state, currentQuestionIndex: action.payload };
    default:
      return state;
  }
};
