import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chengeQuestion } from '../redux/actions/quizActions';
const Quiz = () => {
  const dispatch = useDispatch();
  const { loading, error, questions } = useSelector((state) => state.quiz);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const currentQuestion = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].question
  );
  const currentQuestionOptions = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].options
  );
  const nextQuestion = () => {
    dispatch(chengeQuestion(currentQuestionIndex + 1));
  };
  const prevQuestion = () => {
    dispatch(chengeQuestion(currentQuestionIndex - 1));
  };
  const submitHandler = () => {
    console.log('submit');
  };
  useEffect(() => {}, []);
  return loading ? (
    'loading...'
  ) : error ? (
    { error }
  ) : (
    <div>
      <p>{currentQuestionIndex + 1} / 10</p>
      <p>
        <strong>{currentQuestion}</strong>
      </p>
      <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      {currentQuestionOptions.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
      {currentQuestionIndex < questions.length - 1 ? (
        <button onClick={nextQuestion}>Next</button>
      ) : (
        <button onClick={submitHandler}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;
