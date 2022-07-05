import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question';
import { chengeQuestion } from '../redux/actions/quizActions';
import { endQuiz } from '../redux/actions/stageActions';
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
  };

  useEffect(() => {
    const timerFunc = setTimeout(() => {
      dispatch(endQuiz());
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
    <div>
      <p>Time left: {timeLeft}</p>
      <p>{currentQuestionIndex + 1} / 10</p>

      <Question question={currentQuestion} />

      <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      {currentQuestionIndex < questions.length - 1 ? (
        <button onClick={nextQuestion}>Next</button>
      ) : (
        <button onClick={submitHandler}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;
