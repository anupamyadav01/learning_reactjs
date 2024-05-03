import PropTypes from "prop-types";

function Button({ btnName }) {
  return (
    <button className="bg-green-700 px-6 py-2 text-white font-semibold hover:bg-green-900 hover:text-[gray-300]">
      {btnName}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string,
};

export default Button;
