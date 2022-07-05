import { useDispatch, useSelector } from 'react-redux';
import { chengeAnswer } from '../redux/actions/answerActions';
import classes from './Question.module.css';
import Radio from './Radio';

const Question = ({ question }) => {
  const answers = useSelector((state) => state.answers);
  const dispatch = useDispatch();
  let prevAnswer = null;
  // console.log(answers);

  if (answers.length > 0) {
    prevAnswer = answers?.find((ans) => ans.id === question.id)?.answer;
  }

  //   const [answer, setAnswer] = useState(prevAnswer);
  const handleChange = (value) => {
    dispatch(chengeAnswer(question, value));
  };

  return (
    <div className={classes.container}>
      <h4>
        {question.id + 1}. {question.question}
      </h4>

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
