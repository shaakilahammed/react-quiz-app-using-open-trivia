const Radio = ({ item, checked, onChange }) => {
  return (
    <label>
      <input type="radio" value={item} checked={checked} onChange={onChange} />
      {item}
    </label>
  );
};

export default Radio;
