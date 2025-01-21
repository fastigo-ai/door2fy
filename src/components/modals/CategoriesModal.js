import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoriesModal = ({ onClose }) => {
  const navigate = useNavigate();

  const categoriesData = [
    { imgSrc: "/assets/images/Macbook-HD.png", text: "Macbook Support", link: "/macbook-support" },
    { imgSrc: "/assets/images/Laptop-HD.png", text: "Laptop Support", link: "/laptop-support" },
    { imgSrc: "/assets/images/Desktop-HD.png", text: "Desktop Support", link: "/desktop-support" },
    { imgSrc: "/assets/images/Printer-HD.png", text: "Printer Support", link: "/printer-support" },
    { imgSrc: "/assets/images/Coding.png", text: "Coding Issue", link: "/coding-support" },
    { imgSrc: "/assets/images/Service-HD.png", text: "Service Issue", link: "/service-support" },
  ];

  const handleCategoryClick = (link) => {
    navigate(link);
    onClose(); // Close modal after navigation
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed bottom-0 left-0 w-full bg-white rounded-lg shadow-lg p-4 z-50 font-sora overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
          <button className="text-gray-500 text-xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="text-center font-glory px-4 py-6">
          <h3 className="text-black text-lg font-sora mb-4">Explore Our Categories</h3>
          <div className="grid grid-cols-3 gap-12  bg-white rounded-md">
            {categoriesData.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleCategoryClick(item.link)}
              >
                <div className="mx-auto w-30 h-30">
                  <div className="relative w-20 h-20 mx-auto bg-cyan-100 backdrop-blur-md rounded-full flex items-center justify-center hover:w-16 hover:h-16 transition-all">
                    <img
                      src={item.imgSrc}
                      alt={item.text}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-2 text-black text-sm font-normal">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesModal;
