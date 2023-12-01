import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AutoSuggestion from "../AutoSuggestion/AutoSuggestion";

const AddJobCard = () => {
  const [sample, setSample] = useState([
    { id: 1, value: "Apple" },
    { id: 2, value: "Banana" },
    { id: 3, value: "Orange" },
    { id: 4, value: "Pear" },
  ]);
  const [complainList, setComplainList] = useState([{ id: 1, value: "" }]);
  const [workList, setWorkList] = useState([{ id: 1, value: "" }]);
  const [complainSuggestionData, setComplainSuggestionData] = useState("");

  // Handle Add Complain
  const handleAddComplain = () => {
    setComplainList([
      ...complainList,
      { id: complainList.length + 1, value: "" },
    ]);
  };

  // Handle Remove Complain
  const handleRemoveComplain = (index) => {
    const list = [...complainList];
    list.splice(index, 1);
    setComplainList(list);
  };

  // Complain Auto Suggestion On Change
  const handleComplainAutoSuggestionChange = (e) => {
    setComplainSuggestionData(e.target.value);
  };

  return (
    <div className="flex">
      <div className="flex-1 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Complain</h1>

        {complainList.map((field, index) => (
          <div
            key={field.id}
            className="mb-4 flex items-center justify-between"
          >
            <AutoSuggestion index={index}
              placeholder="Enter Complain"
              onChange={handleComplainAutoSuggestionChange}
              value={complainSuggestionData}
              data={sample}
            />
            <div className="flex">
              {complainList.length - 1 === index && (
                <button
                  className="ml-2 border border-green-600 bg-green-600 text-white p-2 cursor-pointer rounded transition-all ease-in-out hover:bg-green-700"
                  onClick={() => handleAddComplain()}
                >
                  <FaPlus />
                </button>
              )}
              {complainList.length !== 1 && (
                <button
                  className="ml-2 border border-red-600 bg-red-600 text-white p-2 cursor-pointer rounded transition-all ease-in-out hover:bg-red-700"
                  onClick={() => handleRemoveComplain(index)}
                >
                  <RiDeleteBin6Fill />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-1 bg-gray-400" />

      {/* Right Side */}
      <div className="flex-1 bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">Work to do</h1>
        {/* Add your content for the right side here */}
      </div>
    </div>
  );
};

export default AddJobCard;


