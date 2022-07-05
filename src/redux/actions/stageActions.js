import axios from 'axios';
import {
  QUIZ_FAIL,
  QUIZ_REQUEST,
  QUIZ_SUCCESS,
} from '../constants/quizConstants';
import {
  END_QUIZ,
  FETCHING_QUIZ,
  HOME,
  QUIZ,
} from '../constants/stageConstants';

export const fetchingQuiz = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCHING_QUIZ,
    });

    dispatch({
      type: QUIZ_REQUEST,
    });

    const { data } = await axios.get('https://opentdb.com/api.php?amount=10');
    const formatQuestions = data.results.map((q) => ({
      ...q,
      options: [q.correct_answer, ...q.incorrect_answers],
    }));

    dispatch({
      type: QUIZ_SUCCESS,
      payload: formatQuestions,
    });

    dispatch({
      type: QUIZ,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const startQuiz = () => (dispatch) => {
  dispatch({
    type: QUIZ,
  });
};

export const endQuiz = () => (dispatch) => {
  dispatch({
    type: END_QUIZ,
  });
};

export const restartQuiz = () => (dispatch) => {
  dispatch({
    type: HOME,
  });
};
