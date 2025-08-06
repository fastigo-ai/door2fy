import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const CartStep = ({ nextStep }) => {
  const dates = [
    { date: "Aug, 4", day: "Mon" },
    { date: "Aug, 5", day: "Tue" },
    { date: "Aug, 6", day: "Wed" },
    { date: "Aug, 7", day: "Thu" },
    { date: "Aug, 8", day: "Fri" },
  ];

  const timeSlots = ["10am–12pm", "12pm–2pm", "2pm–4pm", "4pm–6pm"];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [addressType, setAddressType] = useState("Home");

  return (
    <div className="relative z-10 min-h-screen bg-white font-sans">
      {/* Unified Container like the Plan Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl grid grid-cols-1 gap-10 px-4 py-8">
        {/* 🛒 Cart + Summary Section */}
        <div className="order-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Your Cart & Service Summary
          </h2>
          <div className="bg-white rounded-xl border p-6 w-full">
            {/* Table Header */}
            <div className="hidden sm:flex justify-between items-center border-b pb-3 mb-4">
              <p className="font-semibold text-lg text-gray-800 w-1/3 text-start">
                Product Name
              </p>
              <p className="font-semibold text-lg text-gray-800 w-1/3 text-center">
                Plan / Service Type
              </p>
              <p className="font-semibold text-lg text-gray-800 w-1/3 text-right">
                Total Amount
              </p>
            </div>

            {/* Cart Item */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b">
              <div className="flex w-full sm:w-1/3 items-start gap-3">
                <div>
                  <p className="font-medium text-lg text-gray-900 text-start">
                    Basic AMC for AC
                  </p>
                  <p className="text-lg text-gray-600 text-start">
                    1 year Plan
                  </p>
                  <p className="text-sm text-gray-600 text-start">
                    Plan Start Date:{" "}
                    <span className="text-gray-700">24 Jul, 2025</span>
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 text-start sm:text-center pt-1">
                <p className="text-sm text-gray-800 font-medium">Basic AMC</p>
              </div>

              <div className="w-full sm:w-1/3 flex justify-between sm:justify-end items-start gap-3">
                <p className="text-base font-bold text-gray-900">₹2,499</p>
                <button className="text-red-500 hover:text-red-600">
                  <IoCloseCircleOutline size={18} />
                </button>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="flex justify-start sm:justify-end mt-4">
              <div className="flex w-full sm:w-auto gap-2 bg-gray-50 border rounded-md px-4 py-2 items-center">
                <input
                  type="text"
                  placeholder="Have a coupon code?"
                  className="w-full sm:w-auto outline-none bg-transparent text-sm placeholder:text-gray-400"
                />
                <button className="text-sm font-semibold text-gray-800">
                  APPLY
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between sm:justify-end items-center mt-6 flex-wrap sm:flex-nowrap gap-2">
              <p className="text-sm text-gray-700">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>{" "}
                (Inc. taxes)
              </p>
              <p className="text-xl font-bold text-gray-900">₹2,499</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-bold text-center border-b pb-4">
              Service Slot
            </h2>

            {/* Dates */}
            <p className="text-center mt-4 text-gray-600">Select Date</p>
            <div className="flex justify-center gap-8 mt-3 flex-wrap">
              {dates.map((d, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDate(d.date)}
                  className={`flex flex-col items-center px-12 py-4 rounded-lg border transition 
              ${
                selectedDate === d.date
                  ? "bg-[#06b6d4] text-white"
                  : "bg-gray-100 text-black border-gray-200"
              }`}
                >
                  <span className="font-bold">{d.date}</span>
                  <span className="text-sm">{d.day}</span>
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <p className="text-center mt-6 text-gray-600">Select Time Slot</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {timeSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-3 rounded-lg border transition 
              ${
                selectedTime === slot
                  ? "bg-[#06b6d4] text-white"
                  : "bg-gray-200 text-gray-500 border-gray-300"
              }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="order-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map (left) */}
          <div className="bg-white rounded-xl flex flex-col justify-between h-full">
            <div className="w-full h-full flex-1 rounded-xl overflow-hidden border mb-4">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://maps.google.com/maps?q=Mittal%20Industries&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shadow-sm border">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded-full">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-medium mb-0 text-start">L block</p>
                <p className="text-sm text-gray-600 text-start">
                  Mahipalpur Village, New Delhi
                </p>
              </div>
            </div>
          </div>

          {/* Address Form (right) */}
          <div className="bg-white rounded-xl border p-6 space-y-6 flex flex-col h-full">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-start">
                Enter complete address
              </h3>
            </div>

            {/* Save as pills */}
            <div className="flex gap-3 flex-wrap">
              {["Home", "Work", "Hotel", "Other"].map((label) => (
                <button
                  key={label}
                  onClick={() => setAddressType(label)}
                  className={`px-4 py-2 rounded-lg border font-medium text-sm flex items-center gap-2 transition ${
                    addressType === label
                      ? "bg-[#06b6d4] text-white"
                      : "bg-white border-gray-200 text-gray-800"
                  }`}
                >
                  {label === "Home" && (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2L2 9h3v7h4v-4h2v4h4V9h3L10 2z" />
                    </svg>
                  )}
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-4 flex-1">
              <div className="space-y-1 sm:col-span-2">
                <label className="block text-sm font-medium text-start">
                  Flat / House no / Building name *
                </label>
                <input
                  type="text"
                  placeholder="eg. 123, Lotus Apartments"
                  className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-lg"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="block text-sm font-medium text-start">
                  Area / Sector / Locality *
                </label>
                <input
                  type="text"
                  placeholder="e.g. L block, Mahipalpur Village, Mahipalpur, New Delhi"
                  className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-lg"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="block text-sm font-medium text-start">
                  Nearby landmark (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. School Ground"
                  className="w-full bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-lg"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="block text-sm font-medium text-start">
                  Your name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-lg"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="block text-sm font-medium text-start">
                  Your phone number (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1234567890"
                  className="w-full bg-white border border-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500 text-lg"
                />
              </div>
            </div>

            {/* Save button */}
            <div className="pt-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg text-lg flex justify-center items-center gap-2">
                Save Address
              </button>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-right mt-4 order-3">
          <button
            onClick={nextStep}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium"
          >
            Continue to Payment →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartStep;
