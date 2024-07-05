import React from "react";
import customFetch from "../utils.js/customFetch";
import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components";
import MovieList from "../components/MovieList";
export const loader = async () => {
  try {
    const movies = await customFetch(
      "/movie/now_playing?language=en-US&page=1"
    );
    return movies;
  } catch (error) {
    return error;
  }
};

const Movies = () => {
  const { data } = useLoaderData();
  const movies = data.results;
  return movies.length > 0 ? <MovieList movies={movies} /> : <p>No movies</p>;
};

export default Movies;
