import {
  RESET_USER,
  SET_RESULT,
  SET_USERNAME,
} from '../constants/userConstants';

export const userReducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { username: action.payload, results: [] };
    case SET_RESULT:
      return action.payload;
    case RESET_USER:
      return { results: [] };
    default:
      return state;
  }
};
