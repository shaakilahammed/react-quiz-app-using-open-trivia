import { htmlEncode } from '../utils/htmlEncode';
import classes from './Radio.module.css';
const Radio = ({ item, checked, onChange, className, ...rest }) => {
  return (
    <label className={`${classes.radioLabel} ${className}`}>
      <input
        type="radio"
        value={item}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      {htmlEncode(item)}
    </label>
  );
};

export default Radio;
