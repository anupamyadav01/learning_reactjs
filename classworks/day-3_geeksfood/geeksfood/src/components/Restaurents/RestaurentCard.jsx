import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const RestaurentCard = ({ name, location, postcode, outcode }) => {
  console.log(name, location);
  return (
    <div className="shadow-lg p-4 mb-5 w-96">
      <div>
        <span className="flex gap-2 items-center mb-3">
          <h1 className="text-xl font-semibold mr-3">{name}</h1>
          <span className="flex gap-2 items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </span>
        </span>
        <span className="flex gap-2 items-center text-sm text-gray-500 mb-2">
          <FaLocationDot /> {location}
        </span>
        <div>
          <p className="text-sm text-gray-500">
            {postcode} {outcode}
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm text-indigo-600 mt-4 cursor-pointer ">
          Visit Menu
        </p>
      </div>
    </div>
  );
};

RestaurentCard.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
};

export default RestaurentCard;
