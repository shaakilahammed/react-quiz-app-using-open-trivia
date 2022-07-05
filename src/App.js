import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import EndQuiz from './pages/EndQuiz';
import Fetching from './pages/Fetching';
import Home from './pages/Home';
import MyResults from './pages/MyResults';
import Quiz from './pages/Quiz';
import {
  END_QUIZ,
  FETCHING_QUIZ,
  HOME,
  MY_RESULTS,
  QUIZ,
} from './redux/constants/stageConstants';

const App = () => {
  const currentStage = useSelector((state) => state.stage);
  let displayPage;
  switch (currentStage) {
    case HOME:
      displayPage = <Home />;
      break;
    case FETCHING_QUIZ:
      displayPage = <Fetching />;
      break;
    case QUIZ:
      displayPage = <Quiz />;
      break;
    case END_QUIZ:
      displayPage = <EndQuiz />;
      break;
    case MY_RESULTS:
      displayPage = <MyResults />;
      break;
    default:
      <Home />;
  }
  return <Layout>{displayPage}</Layout>;
};

export default App;
