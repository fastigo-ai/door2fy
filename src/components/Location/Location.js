import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import "./location.css";
import { useLocationContext } from "../../contexts/LocationContext";

export default function Location() {
  const {location, updateLocation,} = useLocationContext();
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
        const result = data.results[0];
        const cityComponent = result.address_components.find((component) =>
          component.types.includes("locality")
        );
        return {
          title: cityComponent ? cityComponent.long_name : "Unknown City",
          description: result.formatted_address || "Address not available",
          address_components: result.address_components || [], // Include address components
        };
      } else {
        console.error("Error with Geocoding API:", data.error_message);
        return {
          title: "Error fetching city",
          description: "Details unavailable",
          address_components: [],
        };
      }
    } catch (error) {
      console.error("Error fetching city:", error);
      return {
        title: "Error fetching city",
        description: "Details unavailable",
        address_components: [],
      };
    }
  };

  const autoDetectLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const detectedLocation = await fetchCityFromGoogleAPI(latitude, longitude);
            resolve(detectedLocation);
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
        updateLocation(detectedLocation);
      } catch (error) {
        console.error("Error detecting location:", error);
        updateLocation({
          title: "Error detecting location",
          description: "Details unavailable",
          address_components: [],
        });
      } finally {
        setIsAutoDetecting(false);
      }
    } else {
      console.log(selectedLocation);
      updateLocation({
        title: selectedLocation.structured_formatting.main_text || selectedLocation,
      description: selectedLocation.description || "Details unavailable",
      address_components: selectedLocation.address_components || [],
      });
    }
  };

  const handleSearchInModal = async (e) => {
    const userInput = e.target.value;
    setLocationQuery(userInput);
  
    if (userInput.length > 2) {
      try {
        const GOOGLE_APPS_SCRIPT_PROXY = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_PROXY;
        const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${userInput}&types=geocode&key=${apiKey}`;
        
        const proxyUrl = `${GOOGLE_APPS_SCRIPT_PROXY}?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
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
        <div className="text-xl md:text-lg font-semibold">{location.title}</div>
        <div className="flex items-center" onClick={() => setIsModalOpen(true)}>
          <h3 className="text-xs cursor-pointer" >
          {location.description.length > 20 ? location.description.slice(0, 20) + "..." : location.description}
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
          <div className="fixed bottom-0 md:top-[75px] md:left-1 z-50 w-full h-2/5 md:h-3/5 md:w-96 bg-white rounded-lg shadow-lg p-4 font-sora overflow-y-auto"
          style={{ maxHeight: "90vh" }} // Ensures scrollability when clipped
          onClick={(e) => e.stopPropagation()} // Prevents closing on clicking inside modal
          >
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
              <div className="max-h-48 overflow-y-auto mt-2 text-left">
                {Array.isArray(locationResults) &&
                locationResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLocationSelection(result)}
                  >
                    <div className="text-sm font-medium text-gray-800">
                    {result.structured_formatting.main_text}
                    </div>
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
