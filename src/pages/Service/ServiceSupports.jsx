import React, { useState } from "react";
import { acServicePlans } from "../../Data/ServiceData";
import ServiceCard from "./ServiceCard";
import { CheckCircle2 } from "lucide-react";
// import LaptopRepair from "../../../public/assets/images/LaptopRepair.jpg"

const ServiceSupports = () => {
  const [activeType, setActiveType] = useState("Booking");
  const plans = acServicePlans[activeType];

  return (
    <div className="w-full mx-auto font-sans">
      {/* ✅ Hero Section */}
      <section className="bg-white py-12 px-2 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-96">
          {/* ✅ Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="/assets/images/LaptopRepair.jpg"
              alt="AC Repair"
              className="w-full  h-full object-contain"
            />
          </div>

          {/* ✅ Right Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight ">
              <div>Laptop Repair Service in</div>
              <div className="mt-2 md:mt-4">Delhi</div>
            </h1>
              <p className="text-lg mb-4">Sit back, relax and let us take care of your Laptop servicing & repairs</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 md:px-16 py-3 md:py-4 rounded-full text-sm md:text-base mt-4">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Info + Plans Section */}
      <section className="relative w-full py-16 px-4 md:px-8 bg-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 h-96"
          style={{
            // backgroundImage: `url("https://i.postimg.cc/rsd5p8dX/doodle-background-296efd59-1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#06b6d4",
            backgroundBlendMode: "overlay",
            zIndex: 0,
          }}
        />

        {/* Main Card */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 💡 Right Column First on Mobile */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              Laptop Service & Repair Plans
            </h2>
            <p className="text-base text-gray-600 mb-3">
              Select the type of Services
            </p>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                className={`px-5 py-2 rounded border font-medium text-sm md:text-base ${
                  activeType === "Booking"
                    ? "bg-[#06b6d4] text-white border-[#06b6d4]"
                    : "bg-white text-black border-gray-300"
                }`}
                onClick={() => setActiveType("Booking")}
              >
                Doorstep Service
              </button>
              <button
                className={`px-5 py-2 rounded border font-medium text-sm md:text-base ${
                  activeType === "Quick"
                    ? "bg-[#06b6d4] text-white border-[#06b6d4]"
                    : "bg-white text-black border-gray-300"
                }`}
                onClick={() => setActiveType("Quick")}
              >
                Quick Support
              </button>
            </div>

            {/* Plan Cards */}
            <div className="space-y-4">
              {plans.map((plan, index) => (
                <ServiceCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          {/* 💡 Left Column Info */}
          <div className="order-2 md:order-1">
            <h2 className="text-start text-2xl md:text-4xl font-semibold mb-6">
              Regular Laptops Maintenance <br /> Helps
            </h2>
            <ul className="space-y-6 mb-8 text-gray-800">
              {[
                "Improve Cooling",
                "Reduce Electricity Bills",
                "Increase AC's Lifespan",
                "Minimize Breakdowns",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 md:text-lg text-base"
                >
                  <CheckCircle2 className="text-cyan-500 w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-start text-2xl md:text-4xl font-semibold mb-6">
              Laptop Repairs & Maintenance <br /> Service
            </h2>
            <ul className="space-y-6 mb-8 text-gray-800">
              {[
                "High-Quality AC Repairs",
                "Experienced AC Service Engineers",
                "90-days warranty on spare parts",
                "AC AMC (Annual Maintenance) Plans Available",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 md:text-lg text-base"
                >
                  <CheckCircle2 className="text-cyan-500 w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSupports;
