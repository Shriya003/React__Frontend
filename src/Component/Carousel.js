import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/Carousel.css'; 
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
  <button className="arrow-next" onClick={onClick}>
    <FaArrowRight/>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow-prev" onClick={onClick}>
    <FaArrowLeft/>
  </button>
);

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
   
  };

  return (
    <div className="carousel-container">
      <h2>What's on your mind?</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image}
              alt={`Dish ${index}`}
              style={{ width: '100%', borderRadius: '10px' }}
              
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
