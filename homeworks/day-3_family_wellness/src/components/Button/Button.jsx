import PropTypes from "prop-types";

const Button = ({ btnName }) => {
  return (
    <button className="border-2 border-white px-6 py-2 text-white">
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
};

export default Button;
