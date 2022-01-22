import axios from "axios";
import React, { useState, useEffect } from "react";

//Components
import HeroCarousel from "../components/SliderImages/SliderImages";
import PremiereSlider from "../components/Premieres/PremiereSlider";
import CardSlider from "../components/CardSlider/CardSlider";

function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="pt-4 px-6 bg-bms-400">
        <PremiereSlider
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="">
        <CardSlider />
      </div>

      <div className="bg-text-200 text-white px-8 py-6 ">
        <div className="flex flex-col">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PremiereSlider
            title="Premieres"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="px-8 py-6 bg-bms-400">
        <PremiereSlider
          title="Online Streaming Event"
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}
export default HomePage;
