import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieLayout from "../Layouts/MovieLayout";

const MovieHoc = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          element={
            <MovieLayout>
              <Component />
            </MovieLayout>
          }
        />
      </Routes>
    </>
  );
};

export default MovieHoc;
