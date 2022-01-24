import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import axios from "axios";

//Components
import Movies from "../components/Movies/Movies";
import Cast from "../components/Cast/Cast";
import PremiereSlider from "../components/Premieres/PremiereSlider";

//Context
import { MovieContext } from "../Context/Movie.context";

const MoviePage = (props) => {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Movies />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col item-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers</h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-ywllow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-fill h-fill" />
              </div>
              <div className="flex flex-col item-start">
                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-ywllow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col item-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
          <Slider {...settingsCast}>
            {cast.map((castData, index) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
                key={index}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PremiereSlider
            config={settings}
            title="Recommended Movies"
            posters={similarMovies}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PremiereSlider config={settings} title="BMS XCLUSIVE" posters={recommended} />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
