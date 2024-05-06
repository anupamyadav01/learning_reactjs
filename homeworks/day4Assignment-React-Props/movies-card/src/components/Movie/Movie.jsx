import MovieCard from "../MovieCard/MovieCard";
import MoviesData from "../../components/MoviesData";

const Movie = () => {
  console.log(MoviesData[0].Poster);
  return (
    <div className="w-[70%] text-white mx-auto flex flex-col gap-6 rounded-2xl">
      {MoviesData.map((movie) => (
        <MovieCard
          movieTitle={movie.Title}
          key={movie.Title}
          year={movie.Year}
          runtime={movie.Runtime}
          generes={movie.Genre}
          plot={movie.Plot}
          poster={movie.Poster}
          director={movie.Director}
        />
      ))}
    </div>
  );
};

export default Movie;
