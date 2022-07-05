import {
  MARK_PER_QUESTION,
  SET_RESULT,
  SET_USERNAME,
} from '../constants/userConstants';

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
    JSON.stringify({ username: randomUsername, results: [] })
  );
};

export const setResult = () => (dispatch, getState) => {
  const answers = getState().answers;
  const userInfo = getState().userInfo;
  let totalScore = 0;
  let correctAnswer = 0;
  let wrongAnswer = 0;
  let skipQuestion = 0;
  answers.forEach((ans) => {
    if (ans.answer === null) {
      skipQuestion++;
    } else if (ans.answer === ans.correctAnswer) {
      correctAnswer++;
      totalScore += MARK_PER_QUESTION;
    } else {
      wrongAnswer++;
    }
  });

  const updateUserInfo = {
    ...userInfo,
    results: [
      ...userInfo.results,
      { totalScore, correctAnswer, wrongAnswer, skipQuestion },
    ],
  };

  dispatch({
    type: SET_RESULT,
    payload: updateUserInfo,
  });

  localStorage.setItem('userInfo', JSON.stringify({ ...updateUserInfo }));
};
