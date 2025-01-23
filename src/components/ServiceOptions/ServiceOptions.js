import React from 'react';

const SmoothScrollSlider = () => {
  const options = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Option ${i + 1}`,
    image: '/assets/images/Login.webp', // Placeholder image for options
  }));

  return (
    <div className="w-full my-12">
      <div className="text-left md:text-center text-3xl md:text-4xl font-semibold font-sora mb-8 text-cyan-700 ml-4 md:ml-0 md:my-16">
        Service Options
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-6 gap-8 px-4 md:px-[10%] mb-20">
        {options.map((option) => (
          <div key={option.id} className="flex flex-col items-center ">
            <img
              src={option.image}
              alt={option.label}
              className="w-full h-full object-cover rounded-lg shadow-md bg-sky-200"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">{option.label}</p>
          </div>
        ))}
      </div>

      {/* Scrollable View for Mobile */}
      <div
        className="flex ml-4 overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollSlider;
