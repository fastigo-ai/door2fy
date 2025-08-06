import React, { useState } from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/assets/images/Offers/macbook-offer(1).jpeg",
    "/assets/images/Offers/macbook-offer(2).jpeg",
    "/assets/images/Offers/winter-offer.jpg",
    "/assets/images/Offers/student-offer.png",
    "/assets/images/Offers/quicksupport-offer.png",
    "/assets/images/Offers/festive-offer.png",
    "/assets/images/Offers/upgrade-offer.png",
    
    // "/assets/images/Offers/Main-offer.jpg",
  ];

  const handleSliderChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: handleSliderChange,
    responsive: [
      {
        breakpoint: 768, // Tablet and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktop and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative py-2 pb-10 md:pb-20 bg-cyan-700 w-full">
      {/* Offer Slider Title */}
      <div className="text-left md:text-center text-2xl md:text-4xl font-semibold font-sora mx-4 mt-4 md:mt-10 text-white">
        Exciting Offers
      </div>
      <div className="text-left md:text-center text-md md:text-xl font-sora text-white ml-4 md:ml-0 md:mt-4 mb-4 md:mb-10">
        Find out the best offers for you
      </div>

      {/* Image Slider */}
      <div className="overflow-hidden flex justify-center">
        <Slider {...settings} className="w-full md:w-[90%]">
          {images.map((image, index) => (
            <div key={index}>
              <div className="mx-2">
                <img
                  src={image || "/images/placeholder.jpg"}
                  alt={`Slide ${index}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider Progress Bar */}
      <div className="absolute left-0 right-0 flex justify-center py-4 ">
        <div className="w-2/3 md:w-1/3 bg-gray-300 h-[6px] rounded-md relative">
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
