import PropTypes from "prop-types";

function Icons({ imgSrc, para }) {
  return (
    <div>
      <img className="w-48 mb-10" src={imgSrc} alt="" />
      <p>{para}</p>
    </div>
  );
}

Icons.propTypes = {
  imgSrc: PropTypes.string,
  para: PropTypes.string,
};

export default Icons;
