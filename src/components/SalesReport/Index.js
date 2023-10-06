import React from "react";
import SalesReportList from "./SalesReportList";
import { Link } from "react-router-dom";

const SalesReport = () => {
  return (
    <div className="inventory-container">
      <div className="pl-6 pr-6 pt-6 fixed bg-white inventory-header w-10/12">
        <div className="flex items-center justify-between bg-gray-100 shadow-md py-2 px-2">
          <input
            className="rounded border border-gray-300 font-semibold px-2 py-1 "
            type="date"
          />
          <Link to="/add-sales-report">
            <button className="rounded text-white font-semibold px-2 py-1 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer">
              + Sales Report
            </button>
          </Link>
        </div>
      </div>
      <div className="px-6 inventory-section bg-white w-full">
        <div className="mt-5 border border-gray-400 rounded-md px-2 overflow-x-auto">
          <SalesReportList />
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
