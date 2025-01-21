import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-20 right-5 bg-gray-800 text-white p-3 rounded-md flex items-center z-50 text-base max-w-sm justify-between shadow-lg sm:top-5 sm:right-1/2 sm:translate-x-1/2 sm:text-sm sm:max-w-xs sm:p-2">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-white hover:text-red-500 text-lg ml-3 flex items-center focus:outline-none"
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Notification;
