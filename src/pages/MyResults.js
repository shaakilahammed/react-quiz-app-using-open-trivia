import { useDispatch, useSelector } from 'react-redux';
import { resetStats } from '../redux/actions/userActions';
import classes from './MyResults.module.css';

const MyResults = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.userInfo);
  const resetHandler = () => {
    dispatch(resetStats());
  };
  return (
    <div className={classes.container}>
      <div className={classes.stateContainer}>
        <h4>Total attend Quiz: {results.length}</h4>
        <button onClick={resetHandler} className={classes.button}>
          Reset Stats
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Quiz Number</th>
            <th>Answer Question</th>
            <th>Correct Answer</th>
            <th>Wrong Answer</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>Quiz - {index + 1}</td>
              <td>{result.wrongAnswer + result.correctAnswer}</td>
              <td>{result.correctAnswer}</td>
              <td>{result.wrongAnswer}</td>
              <td>{result.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyResults;
