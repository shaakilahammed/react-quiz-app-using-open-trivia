import axios from 'axios';
import { getShuffledArr } from '../../utils/getSuffleArray';
import {
  CHANGE_ANSWER,
  QUIZ_FAIL,
  QUIZ_REQUEST,
  QUIZ_RESET,
  QUIZ_SUCCESS,
} from '../constants/quizConstants';
import {
  END_QUIZ,
  FETCHING_QUIZ,
  HOME,
  MY_RESULTS,
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
    const formatQuestions = data.results.map((q, index) => ({
      id: index,
      ...q,
      options: getShuffledArr([q.correct_answer, ...q.incorrect_answers]),
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
      payload: error.message,
    });
  }
};

export const startQuiz = () => (dispatch) => {
  dispatch({
    type: QUIZ,
  });
};

export const endQuiz = () => (dispatch, getState) => {
  dispatch({
    type: END_QUIZ,
  });
  const answers = getState().answers;
  const questions = getState().quiz.questions;

  questions.forEach((ques) => {
    const found = answers.some((ans) => ans.id === ques.id);
    if (!found)
      answers.push({
        id: ques.id,
        question: ques.question,
        answer: null,
        correctAnswer: ques.correct_answer,
        options: [...ques.options],
      });
  });

  dispatch({ type: CHANGE_ANSWER, payload: answers });
  // console.log(answers);
  // console.log(questions);
};

export const returnHome = () => (dispatch) => {
  dispatch({
    type: HOME,
  });
  dispatch({
    type: QUIZ_RESET,
  });
};

export const showResults = () => (dispatch) => {
  dispatch({
    type: MY_RESULTS,
  });
  dispatch({
    type: QUIZ_RESET,
  });
};
