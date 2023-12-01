// AutoSuggestion.js

import React, { useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

const AutoSuggestion = ({ placeholder, onChange, value, data }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const searchArray = (targetValue) => {
    const result = data.filter((item) =>
      item.value.toLowerCase().includes(targetValue.toLowerCase())
    );
    return result || null;
  };

  const result = searchArray(value);

  return (
    <div className="relative w-full">
      <input
        className="px-2 py-1 border border-gray-400 rounded w-full"
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
          toggleDropdown();
        }}
        onBlur={closeDropdown}
        onFocus={toggleDropdown}
      />
      {isDropdownOpen && value !== "" && (
        <ul className="border border-gray-400 rounded bg-white absolute w-full z-10 shadow-lg top-8">
          {result.length > 0 &&
            result.map((filteredData, filteredIndex) => (
              <li
                key={filteredIndex}
                className="bg-gray-200 border-b border-white px-2 py-1 ease-in-out hover:bg-gray-100 rounded cursor-pointer"
              >
                {filteredData.value}
              </li>
            ))}
          <li className="flex items-center bg-gray-200 border-b border-white px-2 py-1 ease-in-out hover:bg-gray-100 rounded cursor-pointer">
            <MdOutlineLibraryAdd size="1.3rem" className="mr-1" />
            <p>Create ({value})</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestion;
