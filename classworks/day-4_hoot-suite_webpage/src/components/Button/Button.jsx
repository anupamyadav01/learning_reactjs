import PropTypes from "prop-types";

function Button({ btnName }) {
  return (
    <button className="bg-green-700 px-6 py-2 text-white font-semibold">
      {btnName}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string,
};

export default Button;
