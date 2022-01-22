import React from "react";
import Slider from "react-slick";
import Premiere from "../Premieres/Premiere";

const BelowSlider = (props) => {
  const settings = {
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
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
          InitialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { posters, title, isDark, config } = props;

  const currentSettings = config ? config : settings;

  return (
    <div className="bg-bms-400 ">
      <div className="container mx-auto">
        <div className="">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <Slider {...currentSettings}>
          {posters.map((each) => (
            <Premiere {...each} isDark={isDark} />
          ))}
        </Slider>
        {/* Stream */}
        <div className="enclose w-full flex justify-content-center container mx-auto py-9">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
            alt="below"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BelowSlider;
