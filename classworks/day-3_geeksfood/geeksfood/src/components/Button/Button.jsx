import PropTypes from "prop-types";

function Button({ btnName, className }) {
  return <button className={className}>{btnName}</button>;
}

Button.propTypes = {
  btnName: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
