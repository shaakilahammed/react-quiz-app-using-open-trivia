import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../redux/actions/userActions';
import { sortArray } from '../utils/sortArray';

const EndQuiz = () => {
  const dispatch = useDispatch();
  const answers = sortArray(useSelector((state) => state.answers));

  useEffect(() => {
    dispatch(setResult());
  });
  console.log(answers);
  return (
    <>
      {answers.map((ans) => (
        <div key={ans.id} style={{ margin: '20px 0' }}>
          <p>{ans.question}</p>
          <p>Your answer: {ans.answer}</p>
          <p>Correct answer: {ans.correctAnswer}</p>
        </div>
      ))}
    </>
  );
};

export default EndQuiz;
