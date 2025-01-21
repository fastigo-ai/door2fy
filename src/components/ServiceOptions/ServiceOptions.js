import React from 'react';

const SmoothScrollSlider = () => {
  const options = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Option ${i + 1}`,
    image: '/assets/images/Login.webp', // Placeholder image for options
  }));

  return (
    <div className="w-full my-12  ">
      <div className="text-left text-3xl font-semibold font-sora mb-8 text-cyan-700 ml-4">
        Service Options
      </div>
      {/* Scrollable Container */}
      <div
        className="flex ml-4 overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Two Rows */}
        <div className="grid grid-rows-2 grid-flow-col gap-6 ml-4">
          {options.map((option) => (
            <div
              key={option.id}
              className="snap-start flex flex-col items-center justify-center w-40 h-40 bg-sky-200 rounded-lg shadow-md p-2"
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-full h-full object-cover rounded-md"
              />
              {/* <p className="mt-2 text-sm font-medium text-gray-700">
                {option.label}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollSlider;
