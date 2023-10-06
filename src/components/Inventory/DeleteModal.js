import React from "react";

const DeleteModal = ({ onCloseDeleteModal }) => {
  return (
    <>
      <div className="flex flex-col">
        <p>d</p>
        <p>d</p>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => onCloseDeleteModal()}
          className="rounded-lg text-base w-3/12 text-white font-semibold px-2 py-2  bg-yellow-600 transition-all ease-in-out hover:bg-yellow-700 cursor-pointer"
        >
          Cancel
        </button>
        <button className="rounded-lg text-base w-3/12  text-white font-semibold px-2 py-2  bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer ">
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteModal;
