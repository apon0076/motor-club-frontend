import React from "react";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const AppointmentsList = () => {
  return (
    <div className="mt-5 border border-gray-400 rounded-md p-5">
      <table className="common__table">
        <thead>
          <tr>
            <th>Vehicle Info</th>
            <th>Date</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DM-LA-12-1245</td>
            <td>10-12-2023</td>
            <td>Note</td>
            <td>
              <Link to={`/`}>
                <button className="text-white p-2 bg-blue-800 transition-all ease-in-out hover:bg-blue-900 mr-1 rounded">
                  Details
                </button>
                <button className="text-white p-2 bg-yellow-700 transition-all ease-in-out hover:bg-yellow-800 mr-1 rounded">
                  Edit
                </button>
                <button className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900 rounded">
                  Delete
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
      // totalPage={customer?.data?.last_page}
      // pageNumber={customer?.data?.current_page}
      // pageLinks={customer?.data?.links}
      // handlePagination={handlePagination}
      />
    </div>
  );
};

export default AppointmentsList;
