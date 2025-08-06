import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-20 max-md:right-1 max-md:w-2/3 bg-gray-800 text-white p-2 md:p-3 rounded-md flex items-center z-50 text-base max-w-sm justify-between shadow-lg sm:right-1/2 sm:translate-x-1/2 sm:text-sm ">
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
