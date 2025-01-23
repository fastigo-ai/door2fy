import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import "./location.css";

export default function Location() {
  const [location, setLocation] = useState("Janakpuri");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoDetecting, setIsAutoDetecting] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationResults, setLocationResults] = useState([]);

  const fetchCityFromGoogleAPI = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        const addressComponents = data.results[0].address_components;
        const cityComponent = addressComponents.find((component) =>
          component.types.includes("locality")
        );
        return cityComponent ? cityComponent.long_name : "Unknown City";
      } else {
        console.error("Error with Geocoding API:", data.error_message);
        return "Error fetching city";
      }
    } catch (error) {
      console.error("Error fetching city:", error);
      return "Error fetching city";
    }
  };

  const autoDetectLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const city = await fetchCityFromGoogleAPI(latitude, longitude);
            resolve(city);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  };

  const handleLocationSelection = async (selectedLocation) => {
    setIsModalOpen(false);

    if (selectedLocation === "Auto-Detect") {
      setIsAutoDetecting(true);
      try {
        const detectedLocation = await autoDetectLocation();
        setLocation(detectedLocation);
      } catch (error) {
        console.error("Error detecting location:", error);
        setLocation("Error detecting location");
      } finally {
        setIsAutoDetecting(false);
      }
    } else {
      setLocation(selectedLocation);
    }
  };

  const handleSearchInModal = async (e) => {
    const userInput = e.target.value;
    setLocationQuery(userInput);

    if (userInput.length > 2) {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${userInput}&types=geocode&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.predictions) {
          setLocationResults(data.predictions);
        } else {
          setLocationResults([]);
        }
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
        setLocationResults([]);
      }
    } else {
      setLocationResults([]);
    }
  };



  return (
    <div className="z-20">
      {/* Location Display */}
      <div className="location absolute top-0 w-full md:w-[10rem] lg:w-[15rem] p-4 md:py-3 md:px-0 text-white md:text-cyan-800 text-left">
        <div className="text-xl md:text-lg font-semibold">{location}</div>
        <div className="flex items-center" onClick={() => setIsModalOpen(true)}>
          <h3 className="text-xs cursor-pointer" >
            Shivaji Marg, Block A1, Janakpuri, ...
          </h3>
          <IoChevronDown className="ml-2" />
        </div>
      </div>

      {/* Modal with Backdrop */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed bottom-0 md:top-[75px] md:left-1 z-50 w-full h-2/3 md:h-2/3 md:w-96 bg-white rounded-lg shadow-lg p-4 font-sora">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-2xl font-semibold text-gray-800">Select Location</h2>
              <button
                className="text-gray-500 text-xl"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="mt-4">
              <div
                className="flex items-center justify-center text-xl text-orange-500 cursor-pointer hover:bg-orange-100 rounded-md "
                onClick={() => handleLocationSelection("Auto-Detect")}
              >
                <span className="mr-2">
                  {isAutoDetecting ? "Detecting..." : "Auto-Detect"}
                </span>
                <MdGpsFixed />
              </div>
              <div className="flex items-center my-4 text-gray-500">
                <hr className="flex-1 border-gray-300" />
                <span className="mx-2 text-sm">or</span>
                <hr className="flex-1 border-gray-300" />
              </div>
              <input
                className="block w-full h-10 border border-teal-600 shadow-sm rounded-md py-2 px-3 outline-none text-md"
                type="text"
                placeholder="Search by locality, area, or pincode"
                value={locationQuery}
                onChange={handleSearchInModal}
              />
              <div className="max-h-48 overflow-y-auto mt-2">
                {locationResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLocationSelection(result.description)}
                  >
                    <div className="text-sm font-medium text-gray-800">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
