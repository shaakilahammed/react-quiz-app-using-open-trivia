import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../redux/actions/userActions';
const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userInfo.username);
  useEffect(() => {
    if (!username) {
      dispatch(setUsername());
    }
  }, [username, dispatch]);
  return <div>Home</div>;
};

export default Home;
