import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="vstack gap-3 align-items-center mt-3">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
