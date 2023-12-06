import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

const JobCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <div>search</div>
        <button className="bg-red-800 border border-red-800 text-white py-1 ml-5 px-5 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center">
          <FaPlus className="mr-2" />
          Add Attributes
        </button>
        <Link to="/add-job-card">
          <button className="bg-red-800 border border-red-800 text-white py-1 ml-5 px-5 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center">
            <FaPlus className="mr-2" />
            Add Job Card
          </button>
        </Link>
      </div>

      <div className="mt-5 border border-gray-400 rounded-md p-5">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <table className="common__table mt-5">
              <thead>
                <tr className="border-b">
                  <th>Id</th>
                  <th>Customer Name</th>
                  <th>Vehicle Reg No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <tr  className="border-b">
                    <td>111</td>
                    <td>Test</td>
                    <td>DM-LA-12-1212</td>
                    <td>
                      <Link to="/">
                        <button
                          className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900"
                        >
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
              </tbody>
            </table>
            {/* <Pagination
              totalPage={invoiceList?.last_page}
              pageNumber={invoiceList?.current_page}
              pageLinks={invoiceList?.links}
              handlePagination={handlePagination}
            /> */}
          </>
        )}
      </div>
    </>
  );
};

export default JobCard;
