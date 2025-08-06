import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setResults([
        { name: "Macbook", category: "Gadgets", link: "macbook-support" },
        { name: "Laptop", category: "Gadgets", link: "/laptop-support" },
        { name: "Desktop", category: "Gadgets", link: "/desktop-support" },
        { name: "Component", category: "Gadgets", link: "/upgrade-support" },
        { name: "Service", category: "Gadgets", link: "/service-support" },
      ]);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSelect = (link) => {
    navigate(link); // Navigate to the selected item's link
    setShowResults(false); // Hide results after selection
    setQuery(""); // Clear search input
  };

  return (
    <div className="relative bottom-6 md:bottom-24 md:flex md:justify-center px-2">
  {/* Search Bar */}
  <div className="flex items-center md:w-1/3 bg-white rounded-full shadow-lg p-3">
    <input
      className="flex-1 border-none outline-none font-sora text-base py-1 px-3"
      type="text"
      placeholder="Search for services"
      value={query}
      onChange={handleSearch}
    />
    <button className="text-2xl font-extrabold bg-transparent mr-2">
      <CiSearch className="text-gray-600" />
    </button>
  </div>

  {/* Results Modal */}
  {showResults && (
    
       <div className="absolute px-2 w-5/6 md:w-1/3 mx-6 md:mx-0 top-full bg-white rounded-lg shadow-xl shadow-slate-400 mt-1 z-10">
      {results.length > 0 ? (
        results.map((result, index) => (
          <div
            key={index}
            className="p-3 hover:bg-gray-100 border-b last:border-b-0 flex justify-between"
            onClick={() => handleSelect(result.link)} // Handle navigation on click
          >
            <div className="font-medium text-gray-800">{result.name}</div>
            <div className="text-sm text-gray-500">{result.category}</div>
          </div>
        ))
      ) : (
        <div className="p-3 text-center text-gray-500">
          No results found
        </div>
      )}
    </div>
    
   
  )}
</div>

  );
};

export default Search;
