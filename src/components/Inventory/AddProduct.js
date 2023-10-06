import React, { useState } from "react";
import { FaFileImage } from "react-icons/fa";

const AddProduct = ({ onCloseProductModal }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="responsive-modal-lg">
      <p className="font-bold text-lg mb-2">Add Product</p>
      <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1">
        <div className="flex flex-col">
          <label className="font-semibold text-base">Product Name:</label>
          <input
            className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full"
            type="text"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-base">Category:</label>
          <select className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full">
            <option>Engine Oil</option>
            <option>Parts</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-base">Stock:</label>
          <input
            className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full"
            type="number"
            placeholder="Enter Product Stock"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-base">Buying Price:</label>
          <input
            className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full"
            type="number"
            placeholder="Enter Buying Price"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-base">Selling Price:</label>
          <input
            className="outline-none border border-gray-300 px-3 py-2 rounded-xl shadowed-input-box w-full"
            type="number"
            placeholder="Enter Selling Price"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-base">Image:</label>
          <div className="flex justify-between relative">
            <input
              className="outline-none border border-gray-300 px-3 py-1 rounded-xl shadowed-input-box w-7/12"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="absolute right-0 border w-3/12  h-20 md:h-24 lg:h-24 -top-7 flex items-center justify-center border-gray-300 px-3 py-1 rounded-xl shadowed-input-box">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <FaFileImage size="3rem" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => onCloseProductModal()}
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

export default AddProduct;
