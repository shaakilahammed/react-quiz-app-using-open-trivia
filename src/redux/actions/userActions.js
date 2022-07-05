import { SET_USERNAME } from '../constants/userConstants';

export const setUsername = () => (dispatch) => {
  let random = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++) {
    random += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  const randomUsername = 'user_' + random;

  dispatch({
    type: SET_USERNAME,
    payload: randomUsername,
  });

  localStorage.setItem(
    'userInfo',
    JSON.stringify({ username: randomUsername })
  );
};
