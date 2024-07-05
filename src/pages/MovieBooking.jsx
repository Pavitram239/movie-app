import React from "react";
import customFetch from "../utils.js/customFetch";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const result = await customFetch(`/movie/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  toast.success("Success");
  return redirect("/");
};

const MovieBooking = () => {
  const { data } = useLoaderData();
  const imgSrc = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
  return (
    <div className="container my-3 p-2 d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <div className="d-flex gap-1 mb-3 align-items-center">
            <img src={imgSrc} style={{ height: "50px" }} />
            <p>{data.title}</p>
          </div>
          <Form method="post">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile number"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="Number"
                className="form-control"
                placeholder="tickets"
                max={5}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-success w-100">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;
