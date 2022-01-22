import { React } from "react";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import HomePageHoc from "./HOC/HomePageHoc";
import MovieHoc from "./HOC/MovieHoc";

//Pages
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlaysPage from "./Pages/PlaysPage";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <HomePageHoc path="/" component={HomePage} />
      <MovieHoc path="/movie/:id" exact component={MoviePage} />
      <HomePageHoc path="/plays" component={PlaysPage} />
    </>
  );
}

export default App;
