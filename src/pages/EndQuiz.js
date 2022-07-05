import { useDispatch, useSelector } from 'react-redux';
import Answer from '../components/Answer';
import { returnHome } from '../redux/actions/stageActions';
import { sortArray } from '../utils/sortArray';
import classes from './EndQuiz.module.css';

const EndQuiz = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setResult());
  // }, [dispatch]);

  const answers = sortArray(useSelector((state) => state.answers));

  const { results } = useSelector((state) => state.userInfo);

  const restartHandler = () => {
    dispatch(returnHome());
  };

  return (
    <>
      <div className={classes.state}>
        <h4>
          <strong>Total Question:</strong> 10
        </h4>
        <h4>
          <strong>Question Answer: </strong>
          {results[results.length - 1].correctAnswer +
            results[results.length - 1].wrongAnswer}
        </h4>
        <h4>
          <strong>Correct Answer: </strong>
          {results[results.length - 1].correctAnswer}
        </h4>
        <h4>
          <strong>Wrong Answer: </strong>
          {results[results.length - 1].wrongAnswer}
        </h4>
        <h4>
          <strong>Skip Question: </strong>
          {results[results.length - 1].skipQuestion}
        </h4>
        <h4>
          <strong style={{ color: 'rgb(38, 134, 88)' }}>
            Total Score: {results[results.length - 1].correctAnswer} x 10 ={' '}
            {results[results.length - 1].correctAnswer * 10}
          </strong>
        </h4>

        <button onClick={restartHandler} className={classes.button}>
          Restart Quiz
        </button>
      </div>
      {answers.map((ans) => (
        <Answer key={ans.id} question={ans} />
      ))}
    </>
  );
};

export default EndQuiz;
