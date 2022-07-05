import { useDispatch, useSelector } from 'react-redux';
import { returnHome } from '../redux/actions/stageActions';
import classes from './Fetching.module.css';
const Fetching = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.quiz);
  const cancelQuiz = () => {
    dispatch(returnHome());
  };
  return (
    <div className={classes.container}>
      {!error && <h4>Loading...</h4>}
      {error && (
        <>
          <p className="error">{error}</p>
          <button className={classes.button} onClick={cancelQuiz}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Fetching;
