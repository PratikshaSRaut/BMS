import { React, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//components
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";

//Context
import { MovieContext } from "../Context/Movie.context";

const MovieLayout = (props) => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id, setMovie]);

  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default MovieLayout;
