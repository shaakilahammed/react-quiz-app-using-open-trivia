import {
  END_QUIZ,
  FETCHING_QUIZ,
  HOME,
  QUIZ,
} from '../constants/stageConstants';

export const stageReducer = (state = HOME, action) => {
  switch (action.type) {
    case HOME:
      return HOME;
    case FETCHING_QUIZ:
      return FETCHING_QUIZ;
    case QUIZ:
      return QUIZ;
    case END_QUIZ:
      return END_QUIZ;
    default:
      return state;
  }
};
