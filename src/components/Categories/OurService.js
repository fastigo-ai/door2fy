import React from "react";
import { useNavigate } from "react-router-dom";

const ElectronicsSection = () => {
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  const electronicsData = [
    {
      imgSrc: "/assets/images/Macbook-HD.png",
      text: "Macbook Support",
      link: "/macbook-support",
    },
    {
      imgSrc: "/assets/images/Laptop-HD.png",
      text: "Laptop Support",
      link: "/laptop-support",
    },
    {
      imgSrc: "/assets/images/Desktop-HD.png",
      text: "Desktop Support",
      link: "/desktop-support",
    },
    {
      imgSrc: "/assets/images/component-hd.png",
      text: "Component Support",
      link: "/upgrade-support",
    },
    // { imgSrc: '/assets/images/Printer-HD.png', text: 'Printer Support', link: '/printer-support' },
    // { imgSrc: '/assets/images/Coding.png', text: 'Coding Issue', link: '/coding-support' },
    {
      imgSrc: "/assets/images/Service-HD.png",
      text: "Corporate services",
      link: "/service-support",
    },
    {
      imgSrc: "/assets/images/Service-HD.png",
      text: "Service Issue",
      link: "/service-support",
    },
  ];

  return (
    <div className="bg-white text-center font-glory px-4 py-2 md:py-6">
      {/* Heading */}
      <h1 className="text-cyan-700 text-3xl md:text-4xl font-sora font-semibold mb-4">
        Explore Our Services
      </h1>
      <h3 className="text-black text-lg md:text-xl font-sora mb-4">
        We care for all your needs
      </h3>

      {/* Services Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-6 gap-y-10 p-4 md:p-6 bg-white rounded-md w-full max-w-3xl lg:my-12">
          {electronicsData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer md:mb-4"
              onClick={() => handleImageClick(item.link)}
            >
              {/* Icon Wrapper */}
              <div className="flex justify-center items-center">
                <div className="relative w-20 h-[4.8rem] lg:w-32 lg:h-[7.6rem] bg-cyan-100 backdrop-blur-md rounded-full flex items-center justify-center hover:w-18 hover:h-18 transition-all">
                  <img
                    src={item.imgSrc}
                    alt={item.text}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Text Label */}
              <div className="mt-2 text-black text-sm md:text-base font-normal">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="bg-white text-center font-glory px-4 py-6">
    //   <h1 className="text-cyan-700 text-3xl font-sora font-semibold mb-4">Explore Our Services</h1>
    //   <h3 className="text-black text-lg font-sora mb-4 ">We care for all your needs</h3>
    //   <div className="flex justify-center">
    //     <div className="grid grid-cols-3 gap-10 p-6 bg-white rounded-md ">
    //       {electronicsData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="cursor-pointer"
    //           onClick={() => handleImageClick(item.link)}
    //         >
    //             <div className='mx-auto  flex justify-center items-center'>
    //             <div className="relative w-20 h-[4.8rem] mx-auto bg-cyan-100 backdrop-blur-md rounded-full flex items-center justify-center hover:w-16 hover:h-16 transition-all">
    //             <img
    //               src={item.imgSrc}
    //               alt=""
    //               className="w-full object-cover"
    //             />
    //           </div>
    //             </div>

    //           <div className="mt-2 text-black text-sm font-normal">
    //             {item.text}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ElectronicsSection;
