import React from "react";
import Slider from "react-slick";
import Premiere from "./Premiere";

const PremiereSlider = (props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
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

  const { posters, title, subtitle, config } = props;
  const currentSettings = config ? config : settings;
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3 className="text-2xl font-bold py-2">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
      <Slider {...currentSettings}>
        {posters.map((each, index) => (
          <Premiere {...each} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default PremiereSlider;
