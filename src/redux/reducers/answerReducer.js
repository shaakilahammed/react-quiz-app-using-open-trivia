import { ANSWER_RESET, CHANGE_ANSWER } from '../constants/quizConstants';

export const answerReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_ANSWER:
      return [...action.payload];
    case ANSWER_RESET:
      return [];

    default:
      return state;
  }
};
