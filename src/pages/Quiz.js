import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question';
import { chengeQuestion } from '../redux/actions/quizActions';
import { endQuiz } from '../redux/actions/stageActions';
import { setResult } from '../redux/actions/userActions';
import classes from './Quiz.module.css';
const Quiz = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(30);
  const { loading, error, questions } = useSelector((state) => state.quiz);

  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const currentQuestion = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  // const currentQuestionOptions = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestionIndex].options
  // );

  const nextQuestion = () => {
    dispatch(chengeQuestion(currentQuestionIndex + 1));
  };
  const prevQuestion = () => {
    dispatch(chengeQuestion(currentQuestionIndex - 1));
  };

  const submitHandler = () => {
    dispatch(endQuiz());
    dispatch(setResult());
  };

  useEffect(() => {
    const timerFunc = setTimeout(() => {
      dispatch(endQuiz());
      dispatch(setResult());
    }, 30000);

    return () => clearTimeout(timerFunc);
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return loading ? (
    'loading...'
  ) : error ? (
    { error }
  ) : (
    <div className={classes.container}>
      <div className={classes.top}>
        <span className={classes.time}>{timeLeft}</span>
        <span className={classes.question}>
          {currentQuestionIndex + 1} / 10
        </span>
      </div>

      <div>
        <Question question={currentQuestion} />
      </div>
      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className={classes.button}
          onClick={nextQuestion}
          disabled={currentQuestionIndex >= questions.length - 1}
        >
          Next
        </button>

        <button className={classes.submitButton} onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
