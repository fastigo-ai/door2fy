import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";

const ServiceCard = ({ plan }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`border rounded-lg bg-white shadow-sm px-4 py-4 mb-4 ${
        plan.disabled ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      {/* Main Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-base md:text-lg text-start font-semibold  text-gray-900">
            {plan.name}
          </h2>
          <p className="text-sm text-gray-600 text-start mt-1 whitespace-pre-line">
            {plan.subtitle}
          </p>
        </div>

        {/* Right Column */}
        <div className="flex items-center gap-4 justify-between mt-2 md:mt-0 md:ml-4">
          <p className="text-base font-semibold text-black whitespace-nowrap">
            ₹{plan.price}
          </p>
          <button
            className={`text-sm px-4 py-1 border rounded font-medium transition whitespace-nowrap ${
              plan.disabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "text-cyan-600 border-cyan-600 hover:bg-cyan-50"
            }`}
          >
            {plan.disabled ? "Not Available" : "Add +"}
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className="flex justify-between items-center mt-4 cursor-pointer p-4 bg-slate-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="text-sm font-medium text-gray-800">CHECK ALL BENEFITS</p>
        <span className="text-gray-600">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Benefit List */}
      {isExpanded && (
        <ul className="mt-3 space-y-3 text-sm text-start text-gray-700 pl-1">
          {plan.features.map((feature, idx) => {
            const [title, ...rest] = feature.split(":");
            const description = rest.join(":").trim();
            return (
              <li key={idx}>
                <div className="flex items-start text-start gap-2">
                  <FaCheck className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-start">{title}</h4>
                    {description && (
                      <p className="text-gray-600 pl-1 mt-1 text-start">{description}</p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
