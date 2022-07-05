import { useDispatch, useSelector } from 'react-redux';
import { returnHome, showResults } from '../redux/actions/stageActions';
import classes from './NavBar.module.css';
const NavBar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userInfo.username);
  const restartHandler = () => {
    dispatch(returnHome());
  };

  const resultsHandler = () => {
    dispatch(showResults());
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <h3 onClick={restartHandler}>Quiz App</h3>
      </div>
      <div>
        Welcome, <span className={classes.name}>{username}</span>
        <span onClick={resultsHandler} className={classes.link}>
          My Results
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
