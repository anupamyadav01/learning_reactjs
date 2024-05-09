import PropTypes from "prop-types";
const Button = ({ onClick, text, customClass }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  customClass: PropTypes.string,
};

export default Button;
