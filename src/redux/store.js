import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { quizReducer } from './reducers/quizReducer';
import { stageReducer } from './reducers/stageReducer';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
  userInfo: userReducer,
  stage: stageReducer,
  quiz: quizReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : [];

const initialState = {
  userInfo: userInfoFromStorage,
  quiz: { questions: [], currentQuestionIndex: 0 },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
