import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const HomePageHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          element={
            <HomeLayout>
              <Component />
            </HomeLayout>
          }
        />
      </Routes>
    </>
  );
};

export default HomePageHOC;
