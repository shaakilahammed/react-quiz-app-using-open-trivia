import { useDispatch, useSelector } from 'react-redux';
import Answer from '../components/Answer';
import { returnHome } from '../redux/actions/stageActions';
import { sortArray } from '../utils/sortArray';
import classes from './EndQuiz.module.css';

const EndQuiz = () => {
  const dispatch = useDispatch();

  const answers = sortArray(useSelector((state) => state.answers));

  const { results } = useSelector((state) => state.userInfo);
  const result = results[results.length - 1];

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
          {result.correctAnswer + result.wrongAnswer}
        </h4>
        <h4>
          <strong>Correct Answer: </strong>
          {result.correctAnswer}
        </h4>
        <h4>
          <strong>Wrong Answer: </strong>
          {result.wrongAnswer}
        </h4>
        <h4>
          <strong>Skip Question: </strong>
          {result.skipQuestion}
        </h4>
        <h4>
          <strong style={{ color: 'rgb(38, 134, 88)' }}>
            Total Score: {result.correctAnswer} x 10 ={' '}
            {result.correctAnswer * 10}
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
