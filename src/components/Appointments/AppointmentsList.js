import React from "react";
import Pagination from "../Pagination/Pagination";
import { Link, useHistory } from "react-router-dom";
import Loader from "../Loader/Loader";

const AppointmentsList = ({ isLoading, appointmentData, handlePagination }) => {

  return (
    <div className="mt-5 border border-gray-400 rounded-md p-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
              {appointmentData?.data?.data.map((data, index) => (
                <tr key={index}>
                  <td>{data.car_id}</td>
                  <td>{data.date}</td>
                  <td>{data.note}</td>
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
              ))}
            </tbody>
          </table>
          <Pagination
            totalPage={appointmentData?.data?.last_page}
            pageNumber={appointmentData?.data?.current_page}
            pageLinks={appointmentData?.data?.links}
            handlePagination={handlePagination}
          />
        </>
      )}
    </div>
  );
};

export default AppointmentsList;
