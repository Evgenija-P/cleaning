import Proptypes from "prop-types";
import { useState } from "react";
import Slider from "react-slick";
import { ArrowLeftSW, ArrowRightSw } from "../icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../data/response.json";
import ReviewCard from "./reviewCard";

const ReviewList = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute z-10 top-2/4 left-0 cursor-pointer" onClick={onClick}>
        <ArrowLeftSW />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute z-10 top-2/4 right-0 cursor-pointer" onClick={onClick}>
        <ArrowRightSw />
      </div>
    );
  };

  NextArrow.propTypes = {
    onClick: Proptypes.func,
  };

  PrevArrow.propTypes = {
    onClick: Proptypes.func,
  };

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="w-[950px] mx-auto">
      <Slider {...settings} className="slider-price">
        {data.map((el, idx) => (
          <div className={idx === imageIndex ? "scale-50 activeSlide" : "slide"} key={idx + 1}>
            <ReviewCard item={el} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewList;
