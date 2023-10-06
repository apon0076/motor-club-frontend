import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SalesReportList = () => {
  return (
    <table className="common__table mt-5">
      <thead>
        <tr className="border-b">
          <th className="whitespace-nowrap">Date</th>
          <th className="whitespace-nowrap">Create Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td>December 17, 1995 03:24:00</td>
          <td>December 17, 1995 03:24:00</td>
          <td>
            {/* <Link to={`/view-sales-report/${id}`}> */}
            <Link to={`/view-sales-report`}>
              <button className="text-white p-2  bg-blue-700 transition-all ease-in-out hover:bg-blue-900">
                <FaEye size="1.1rem" />
              </button>
            </Link>
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

export default SalesReportList;
