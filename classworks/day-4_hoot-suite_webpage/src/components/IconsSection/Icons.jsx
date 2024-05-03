import PropTypes from "prop-types";

function Icons({ imgSrc, para }) {
  return (
    <div className=" flex flex-col items-center text-center mb-10">
      <div className="">
        <img className=" mb-4 w-[200px]" src={imgSrc} alt="" />
      </div>
      <p className="w-[200px]">{para}</p>
    </div>
  );
}

Icons.propTypes = {
  imgSrc: PropTypes.string,
  para: PropTypes.string,
};

export default Icons;
