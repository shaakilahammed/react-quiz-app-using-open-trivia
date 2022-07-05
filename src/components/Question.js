import { useDispatch, useSelector } from 'react-redux';
import { chengeAnswer } from '../redux/actions/answerActions';
import Radio from './Radio';

const Question = ({ question, options }) => {
  const answers = useSelector((state) => state.answers);
  const dispatch = useDispatch();
  let prevAnswer = '';
  console.log(answers);

  if (answers.length > 0) {
    prevAnswer = answers?.find((ans) => ans.id === question.id)?.answer;
  }

  //   const [answer, setAnswer] = useState(prevAnswer);
  const handleChange = (value) => {
    dispatch(chengeAnswer(question, value));
  };

  return (
    <div>
      <p>
        <strong>{question.question}</strong>
      </p>
      {question.options.map((option, index) => (
        <Radio
          item={option}
          key={index}
          checked={option === prevAnswer}
          onChange={() => handleChange(option)}
        />
        // <button key={index}>{option}</button>
      ))}
    </div>
  );
};

export default Question;
