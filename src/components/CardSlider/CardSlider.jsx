import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../SliderImages/CarouselArrow";

const Card = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img className="w-full h-full rounded-xl" src={props.src} alt="Card" />
      </div>
    </>
  );
};

const CardSlider = () => {
  const CardImage = [
    "Images/Bestofentertainment/one.jpg",
    "Images/Bestofentertainment/two.jpg",
    "Images/Bestofentertainment/three.jpg",
    "Images/Bestofentertainment/four.jpg",
    "Images/Bestofentertainment/five.jpg",
    "Images/Bestofentertainment/six.jpg",
    "Images/Bestofentertainment/seven.jpg",
    "Images/Bestofentertainment/eight.jpg",
    "Images/Bestofentertainment/nine.jpg",
    "Images/Bestofentertainment/ten.jpg",
    "Images/Bestofentertainment/eleven.jpg",
    "Images/Bestofentertainment/twelve.jpg",
  ];

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          InitialSlide: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden pb-6 px-6 bg-bms-400">
      <div className="enclose w-full flex justify-content-center container mx-auto py-9">
        <img
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
          alt="below"
        ></img>
      </div>
      <div className="text-2xl font-bold py-2">The Best of Entertainment</div>
      <PrevArrow className="left-6" />

      <Slider {...settings}>
        {CardImage.map((image, index) => (
          <Card src={image} key={index} />
        ))}
      </Slider>
      <NextArrow className="right-6" />
    </div>
  );
};

export default CardSlider;
