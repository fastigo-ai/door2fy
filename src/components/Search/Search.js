import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setResults([
        { name: "Laptop", category: "Gadgets", link: "/upgrade" },
        { name: "Tablet", category: "Gadgets", link: "/desktop-repair" },
        { name: "Laptop", category: "Gadgets", link: "/windows-repair" },
      ]);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="relative bottom-6 px-2">
  {/* Search Bar */}
  <div className="flex items-center bg-white rounded-full shadow-lg p-3">
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
    <div className="flex justify-center">
       <div className="absolute px-2 w-4/5 top-full bg-white rounded-lg shadow-xl shadow-slate-400 mt-2 z-10">
      {results.length > 0 ? (
        results.map((result, index) => (
          <div
            key={index}
            className="p-3 hover:bg-gray-100 border-b last:border-b-0"
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
    </div>
   
  )}
</div>

  );
};

export default Search;
