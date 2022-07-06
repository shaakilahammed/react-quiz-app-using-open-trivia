import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingQuiz } from '../redux/actions/stageActions';
import { setUsername } from '../redux/actions/userActions';
import classes from './Home.module.css';
const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userInfo.username);

  const startQuiz = () => {
    dispatch(fetchingQuiz());
  };

  useEffect(() => {
    if (!username) {
      dispatch(setUsername());
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') dispatch(fetchingQuiz());
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [username, dispatch]);
  return (
    <div className={classes.buttonContainer}>
      <h4>Quiz Time: 30 Seconds</h4>
      <h4>Total Question: 10</h4>
      <h4>Total Mark: 50</h4>
      <button className={classes.button} onClick={startQuiz}>
        START
      </button>
    </div>
  );
};

export default Home;
