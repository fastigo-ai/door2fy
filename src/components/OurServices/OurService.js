import React from 'react';
import { useNavigate } from 'react-router-dom';

const ElectronicsSection = () => {
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  const electronicsData = [
    { imgSrc: '/assets/images/Macbook-HD.png', text: 'Macbook Support', link: '/macbook-support' },
    { imgSrc: '/assets/images/Laptop-HD.png', text: 'Laptop Support', link: '/laptop-support' },
    { imgSrc: '/assets/images/Desktop-HD.png', text: 'Desktop Support', link: '/desktop-support' },
    { imgSrc: '/assets/images/Printer-HD.png', text: 'Printer Support', link: '/printer-support' },
    { imgSrc: '/assets/images/Coding.png', text: 'Coding Issue', link: '/coding-support' },
    { imgSrc: '/assets/images/Service-HD.png', text: 'Service Issue', link: '/service-support' },
  ];

  return (
    <div className="bg-white text-center font-glory px-4 py-6">
      <h1 className="text-cyan-700 text-3xl font-sora font-semibold mb-4">Explore Our Services</h1>
      <h3 className="text-black text-lg font-sora mb-4 ">We care for all your needs</h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-12 p-6 bg-white rounded-md">
          {electronicsData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handleImageClick(item.link)}
            >
                <div className='mx-auto w-30 h-30'>
                <div className="relative w-20 h-20 mx-auto bg-cyan-100 backdrop-blur-md rounded-full flex items-center justify-center hover:w-16 hover:h-16 transition-all">
                <img
                  src={item.imgSrc}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
                </div>
              
              <div className="mt-2 text-black text-sm font-normal">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsSection;
