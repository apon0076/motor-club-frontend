import React from "react";
import engineOil from "./../../assets/engine-oil.jpg";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";

const InventoryListTable = ({
  productModalTypeOpen,
  setProductModalTypeOpen,
  onOpenProductModal,
  onOpenDeleteModal,
}) => {
  return (
    <table className="common__table mt-5">
      <thead>
        <tr className="border-b">
          <th className="whitespace-nowrap">Product Name</th>
          <th>Category</th>
          <th>Image</th>
          <th>Stock</th>
          <th className="whitespace-nowrap">Buying Price</th>
          <th className="whitespace-nowrap">Selling Price</th>
          <th className="w-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td>
            Liqui Moly Synth 10W-40 Street Race Full Synthetic Engine Oil - 1
            Litre
          </td>
          <td className="whitespace-nowrap">Engine Oil</td>
          <td className="w-20 ">
            <img
              className="max-h-full max-w-full object-contain"
              src={engineOil}
              alt="image"
            />
          </td>
          <td>100</td>
          <td>1000</td>
          <td>1300</td>
          <td>
            <button
              className="text-white p-2  bg-blue-700 transition-all ease-in-out hover:bg-blue-900"
              onClick={() => {
                onOpenProductModal();
                setProductModalTypeOpen(1);
              }}
            >
              <MdOutlinePlaylistAdd size="1.1rem" />
            </button>
            <button
              className="text-white p-2  bg-green-700 transition-all ease-in-out hover:bg-green-900"
              onClick={() => {
                onOpenProductModal();
                setProductModalTypeOpen(2);
              }}
            >
              <FaEdit size="1.1rem" />
            </button>
            <button
              className="text-white p-2  bg-red-700 transition-all ease-in-out hover:bg-red-900"
              onClick={() => onOpenDeleteModal()}
            >
              <FaTrash size="1.1rem" />
            </button>
          </td>
        </tr>
        <tr className="border-b">
          <td>
            Liqui Moly Synth 10W-40 Street Race Full Synthetic Engine Oil - 1
            Litre
          </td>
          <td className="whitespace-nowrap">Engine Oil</td>
          <td className="w-20 ">
            <img
              className="max-h-full max-w-full object-contain"
              src={engineOil}
              alt="image"
            />
          </td>
          <td>100</td>
          <td>1000</td>
          <td>1300</td>
          <td>
            <button className="text-white p-2  bg-blue-700 transition-all ease-in-out hover:bg-blue-900">
              <MdOutlinePlaylistAdd size="1.1rem" />
            </button>
            <button className="text-white p-2  bg-green-700 transition-all ease-in-out hover:bg-green-900">
              <FaEdit size="1.1rem" />
            </button>
            <button className="text-white p-2  bg-red-700 transition-all ease-in-out hover:bg-red-900">
              <FaTrash size="1.1rem" />
            </button>
          </td>
        </tr>
        <tr className="border-b">
          <td>
            Liqui Moly Synth 10W-40 Street Race Full Synthetic Engine Oil - 1
            Litre
          </td>
          <td className="whitespace-nowrap">Engine Oil</td>
          <td className="w-20 ">
            <img
              className="max-h-full max-w-full object-contain"
              src={engineOil}
              alt="image"
            />
          </td>
          <td>100</td>
          <td>1000</td>
          <td>1300</td>
          <td>
            <button className="text-white p-2  bg-blue-700 transition-all ease-in-out hover:bg-blue-900">
              <MdOutlinePlaylistAdd size="1.1rem" />
            </button>
            <button className="text-white p-2  bg-green-700 transition-all ease-in-out hover:bg-green-900">
              <FaEdit size="1.1rem" />
            </button>
            <button className="text-white p-2  bg-red-700 transition-all ease-in-out hover:bg-red-900">
              <FaTrash size="1.1rem" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InventoryListTable;
