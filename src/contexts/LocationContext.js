// LocationContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const LocationContext = createContext();

export const useLocationContext = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    title: "Select Your Location",
    description: "Your Location Details",
    address_components: [],
  });

  // Update location and save to sessionStorage
  const updateLocation = (newLocation) => {
    setLocation(newLocation);
    sessionStorage.setItem("location", JSON.stringify(newLocation));
  };

   // Load location from sessionStorage on initialization
   useEffect(() => {
    const savedLocation = sessionStorage.getItem("location");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
