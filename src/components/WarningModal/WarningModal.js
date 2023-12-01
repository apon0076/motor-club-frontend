import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoWarningSharp } from "react-icons/io5";
import { TiCancel } from "react-icons/ti";

const WarningModal = ({ id, loading, handleClick, modalControlState }) => {
  return (
    <div className="px-2 py-5 flex flex-col items-center justify-center">
      <IoWarningSharp size="3.4rem" className="text-red-600" />
      <p className="font-bold py-2">Are You Sure You Want to Delete?</p>
      <div className="flex items-center justify-around w-full mt-1">
        <button
          className="flex items-center justify-center border border-yellow-600 bg-yellow-600 text-white py-1 px-2 font-bold transition-all ease-in-out hover:bg-yellow-700 w-5/12 rounded"
          onClick={() => modalControlState(false)}
        >
          <TiCancel size="1.4rem" className="mr-1" />
          Cancel
        </button>
        <button
          className="flex items-center justify-center border border-red-600 bg-red-600 text-white py-1 px-2 font-bold transition-all ease-in-out hover:bg-red-700 w-5/12 rounded"
          onClick={() => handleClick(id)}
        >
          {loading ? (
            <div className="w-5 h-5 border-4 border-teal-600 rounded-full loader mr-2"></div>
          ) : (
            <FaTrashAlt size="1rem" className="mr-1" />
          )}
          Delete
        </button>
      </div>
    </div>
  );
};

export default WarningModal;
