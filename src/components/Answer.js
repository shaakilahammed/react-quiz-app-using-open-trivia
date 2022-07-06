import { htmlEncode } from '../utils/htmlEncode';
import classes from './Answer.module.css';
import Radio from './Radio';
const Answer = ({ question }) => {
  return (
    <div className={classes.container}>
      <h4>
        {question.id + 1}. {htmlEncode(question.question)}
      </h4>

      {question.options.map((option, index) => (
        <Radio
          className={
            option === question.correctAnswer
              ? classes.correct
              : option === question.answer
              ? classes.wrong
              : null
          }
          item={option}
          key={index}
          defaultChecked={option === question.answer}
          disabled
        />

        // <button key={index}>{option}</button>
      ))}
    </div>
  );
};

export default Answer;
