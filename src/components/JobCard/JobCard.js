import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>search</div>
        <button className="bg-red-800 border border-red-800 text-white py-1 ml-5 px-5 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center">
          <FaPlus className="mr-2" />
          Add Attributes
        </button>
        <Link to='/add-job-card'>
          <button className="bg-red-800 border border-red-800 text-white py-1 ml-5 px-5 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center">
            <FaPlus className="mr-2" />
            Add Job Card
          </button>
        </Link>
      </div>
    </>
  );
};

export default JobCard;
