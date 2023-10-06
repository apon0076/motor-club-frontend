import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { MdWarning } from "react-icons/md";

const DeleteModalContent = ({ item, onCloseModal, handleFunction }) => {
  return (
    <div className="px-7 pt-4 pb-2 flex flex-col items-center">
      <MdWarning size="4.5rem" className="text-red-600" />
      <p className="font-semibold text-2xl pt-3 pb-6">Are You Sure?</p>
      <div className="grid grid-cols-2 gap-20 ">
        <button
          onClick={() => onCloseModal()}
          className="flex items-center outline-none bg-yellow-500 text-black px-4 py-2 text-lg rounded-lg font-semibold transition-all ease-in-out hover:bg-yellow-700 cursor-pointer"
        >
          <ImCancelCircle size="1.2rem" className="mr-1" />
          Cancel
        </button>
        <button
          onClick={() => handleFunction(item)}
          className="flex items-center outline-none bg-red-600 text-white px-4 py-2 text-lg rounded-lg font-semibold transition-all ease-in-out hover:bg-red-800 cursor-pointer"
        >
          <FaTrashCan size="1rem" className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModalContent;
