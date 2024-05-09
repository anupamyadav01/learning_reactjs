import PropTypes from "prop-types";

const Checkbox = ({ title, state, onChange }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} checked={state} />
      <label>{title}</label>
    </div>
  );
};

Checkbox.propTypes = {
  title: PropTypes.string,
  state: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
