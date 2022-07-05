import { CHANGE_ANSWER } from '../constants/quizConstants';

export const answerReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_ANSWER:
      return [...action.payload];

    default:
      return state;
  }
};
