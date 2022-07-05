import { RESET_USER, SET_USERNAME } from '../constants/userConstants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { username: action.payload };
    case RESET_USER:
      return {};
    default:
      return state;
  }
};
