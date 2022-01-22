import React from "react";

//Components
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
