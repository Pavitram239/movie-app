import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MovieCard = ({
  overview,
  title,
  poster_path,
  backdrop_path,
  id,
  release_date,
}) => {
  const imgSrc = "https://image.tmdb.org/t/p/original" + poster_path;
  return (
    <div className="p-2">
      <div className="card mb-3" style={{ maxWidth: "540px", height: "200px" }}>
        <div className="row g-0 h-100">
          <div className="col-md-4 h-100">
            <img
              src={imgSrc}
              className="img-fluid rounded-start h-100 "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-truncate">{overview}</p>
              <p className="card-text">
                <small className="text-body-secondary">release date</small>
                {release_date}
              </p>
              <NavLink className="btn btn-primary" to={`/${id}`}>
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
