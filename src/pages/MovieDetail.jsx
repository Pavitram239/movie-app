import React from "react";
import customFetch from "../utils.js/customFetch";
import { NavLink, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const result = await customFetch(`/movie/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const MovieDetail = () => {
  const { data } = useLoaderData();
  const imgSrc = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-3 mb-3" style={{ maxWidth: "720px" }}>
        <img src={imgSrc} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.overview}</p>
          <NavLink
            className="btn btn-primary w-100"
            to={`/movie-booking/${data.id}`}
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
