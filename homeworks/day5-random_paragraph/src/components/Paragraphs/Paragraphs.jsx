import Data from "../Data.js";
import PropTypes from "prop-types";

const Paragraphs = ({ text, srNo }) => {
  console.log(Data);
  return (
    <div className="mb-6 shadow-md p-5">
      <h1>
        {srNo + 1}. {text}
      </h1>
    </div>
  );
};

Paragraphs.propTypes = {
  text: PropTypes.string,
  srNo: PropTypes.number,
};

export default Paragraphs;
