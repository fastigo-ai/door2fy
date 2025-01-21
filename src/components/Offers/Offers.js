import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaCircle } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/assets/images/Offers/Main-offer.jpg',
    '/assets/images/Offers/Main-offer.jpg',
    '/assets/images/Offers/Main-offer.jpg',
    '/assets/images/Offers/Main-offer.jpg',
    '/assets/images/Offers/Main-offer.jpg',
  ];

  const handleSliderChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleSliderChange,
  };

  return (
    <div className="relative py-2 pb-12 bg-cyan-700">

      {/* Offer Slider Title */}
      <div className="text-left text-2xl font-semibold font-sora mx-4 mt-4 text-white">
        Exciting Offers
      </div>
      <div className="text-left text-md font-sora text-white ml-4 mb-4">
        Find out the best offers for you
      </div>
      {/* Image Slider */}
      <div className="overflow-hidden">
        <Slider {...settings} className="w-full">
          {images.map((image, index) => (
            <div key={index}>
              <div className="mx-2">
                <img
                  src={image || '/images/placeholder.jpg'}
                  alt={`Slide ${index}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider Position Indicator */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`text-xl cursor-pointer ${index === currentSlide ? 'text-cyan-500' : 'text-gray-500'}`}
            onClick={() => handleSliderChange(index)}
          />
        ))}
      </div> */}

      
       {/* Slider Progress Bar */}
       <div className="absolute left-0 right-0 flex justify-center py-4 ">
        <div className="w-2/3 bg-gray-300 h-[6px] rounded-md relative">
          <div
            className="bg-cyan-500 h-[6px] rounded-md"
            style={{ width: `${(currentSlide / (images.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
