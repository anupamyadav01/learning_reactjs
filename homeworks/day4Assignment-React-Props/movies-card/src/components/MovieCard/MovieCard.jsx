import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareFromSquare,
  faHeart,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

const MovieCard = ({
  movieTitle,
  year,
  runtime,
  generes,
  plot,
  poster,
  director,
}) => {
  return (
    <div className=" w-full flex justify-between p-4 rounded-xl bg-black">
      <section className="w-1/2 p-4 flex flex-col justify-around">
        <div>
          <h1 className="text-3xl">{movieTitle}</h1>
          <div className="text[#9ac7fa] mb-6">
            <span>{year}, </span>
            <span>{director}</span>
          </div>

          <div>
            <span className="border rounded-md px-2 py-1 mr-4">{runtime}</span>
            <span>{generes}</span>
          </div>
          <div className="mt-7 text-justify">
            <p>{plot}</p>
          </div>
        </div>
        <div className="mt-7 flex gap-4 text-xl ml-4">
          <FontAwesomeIcon icon={faShareFromSquare} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
        </div>
      </section>
      <section className="w-1/3 align-middle">
        <img src={poster} alt="Poster" />
      </section>
    </div>
  );
};

MovieCard.propTypes = {
  movieTitle: PropTypes.string,
  year: PropTypes.string,
  runtime: PropTypes.string,
  generes: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
  director: PropTypes.string,
};

export default MovieCard;
