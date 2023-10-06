import React from "react";

const CreateCategory = ({ onCloseCategoryModal }) => {
  return (
    <div className="responsive-modal-md">
      <p className="font-bold text-lg mb-2">Add Category</p>
      <div className="grid grid-cols-1">
        <div className="flex flex-col">
          <label className="font-semibold text-base">Category Name:</label>
          <input
            className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full"
            type="text"
            placeholder="Enter Category Name"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-base">Parent Category:</label>
          <select className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full">
            <option>Engine Oil</option>
            <option>Parts</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => onCloseCategoryModal()}
          className="rounded-lg text-base w-3/12 text-white font-semibold px-2 py-2  bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer"
        >
          Cancel
        </button>
        <button className="rounded-lg text-base w-3/12  text-white font-semibold px-2 py-2  bg-green-800 transition-all ease-in-out hover:bg-green-900 cursor-pointer ">
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
