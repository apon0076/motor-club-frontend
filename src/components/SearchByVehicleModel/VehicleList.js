import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  customerDetails_id,
  searchByVehicleModel,
  vehicleDetailsId,
  vehicleListPagination,
} from "../../store/VehicleModel/vehicleModelAction";
import Pagination from "../Pagination/Pagination";

export default function VehicleList({ vehicleList }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  console.log("list of cars", vehicleList);
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    dispatch(vehicleListPagination(pageNumber));
  };
  const handleSearchVechile = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(searchByVehicleModel(search));
  }, [search]);
  const getId = (user, car) => {
    dispatch(customerDetails_id(user));
    dispatch(vehicleDetailsId(car));
  };

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="relative">
          <input
            className="border border-black px-8 py-1 outline-none"
            type="text"
            onChange={(e) => dispatch(searchByVehicleModel(e.target.value))}
          />
          <FaSearch className="absolute top-2 left-2" />
        </div>
      </div>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        <table className="common__table">
          <thead>
            <tr>
              <th>Vehicle Model</th>
              <th>Model Year</th>
              <th>Owner</th>
              <th>Registration No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicleList?.data?.map((data, index) => (
              <tr key={index}>
                <td>{data?.model}</td>
                <td>{data?.model_year}</td>
                <td>{data?.customer_name}</td>
                <td>{data?.registration_no}</td>
                <td>
                  <Link to="/vehicle-profile">
                    <button
                      className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900"
                      onClick={() => getId(data?.customer_id, data?.id)}
                    >
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalPage={vehicleList?.last_page}
          pageNumber={vehicleList?.current_page}
          pageLinks={vehicleList?.links}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
}
