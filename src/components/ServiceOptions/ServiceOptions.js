import React from "react";
import {Link} from "react-router-dom"

const SmoothScrollSlider = () => {
  const options = [
    {
      name: "Windows service",
      description:
        "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed.",
      price: 599,
      image: "/assets/images/Door2fyImage/Service-Option/WindowsRepair-copy.png",
    },
    {
      name: "Macbook service",
      description:
        "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed",
      price: 699,
      image: "/assets/images/Door2fyImage/Service-Option/MacbookRepair-copy.png",
    },
    {
      name: "Desktop service",
      description:
        "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed",
      price: 599,
      image: "/assets/images/services/desktopsupport.jpg",
    },
    {
      name: "Gaming laptop | desktop service",
      description:
        "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed",
      price: 799,
      image: "/assets/images/services/componentsupport-copy.jpg",
    },
    
  ];

  return (
    <div className="w-full my-12">
      <div className="text-left md:text-center text-3xl md:text-4xl font-semibold font-sora mb-8 text-cyan-700 ml-4 md:ml-0 md:my-16">
        Service Opti
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-4  gap-8 px-4 md:px-[10%] mb-20">
        {options.map((option) => (
          <Link
          to={`/itemPage/${option.name}`}
          state={{
            serviceData: option,
            similarItems: options,
          }}
          className="text-cyan-600 text-md font-semibold ml-4"
        >
          <div key={option.id} className="flex flex-col items-center ">
            <img
              src={option.image}
              alt={option.name}
              className="w-full h-full object-cover rounded-lg shadow-md bg-sky-200"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">
              {option.name}
            </p>
          </div>
          </Link>
        ))}
      </div>

      {/* Scrollable View for Mobile */}
      <div
        className="flex ml-4 mt-6 overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden "
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Two Rows */}
        <div className="grid grid-rows-1 grid-flow-col gap-6 ml-4">
          {options.map((option) => (
            <Link
            to={`/itemPage/${option.name}`}
            state={{
              serviceData: option,
              similarItems: options,
            }}
            className=""
          >
            <div
              key={option.id}
              className="snap-start flex flex-col items-center justify-center w-40  p-2"
            >
              <img
                src={option.image}
                alt={option.name}
                className="w-full h-36 object-cover rounded-md"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">
                {option.name}
              </p>
            </div>
          </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollSlider;
