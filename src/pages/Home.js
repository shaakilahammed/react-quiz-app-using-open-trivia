import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingQuiz } from '../redux/actions/stageActions';
import { setUsername } from '../redux/actions/userActions';
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
  }, [username, dispatch]);
  return (
    <div>
      <button onClick={startQuiz}>START</button>
    </div>
  );
};

export default Home;
