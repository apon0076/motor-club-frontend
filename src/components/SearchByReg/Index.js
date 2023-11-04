import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  customerDetails_id,
  vehicleDetailsId,
} from "../../store/VehicleModel/vehicleModelAction";
import { fetchAllVehicleListByReg } from "../../store/vehicleRegNo/vehicleRegNoAction";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";

export default function Index() {
  const [searchVehicle, setSearchVehicle] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // Push Query Params
  useEffect(() => {
    history.push(`/search-by-reg?search=&page=1`);
  }, []);

  // Handle Pagination
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    history.push(`/search-by-reg?search=${searchVehicle}&page=${pageNumber}`);
  };

  // Get Id
  const getId = (user, car) => {
    dispatch(customerDetails_id(user));
    dispatch(vehicleDetailsId(car));
  };

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const search = getQueryParams.get("search");
  const page = getQueryParams.get("page");

  // API Call for Vehicle List By Registration
  useEffect(() => {
    dispatch(
      fetchAllVehicleListByReg(
        search !== null ? search : "",
        page !== null ? page : ""
      )
    );
  }, [search, page]);

  // Get Value from Reducer
  const { vehicleList, isLoading } = useSelector((state) => state.vehicleReg);

  return (
    <>
      <div className="flex items-center justify-end">
        <div className="relative">
          <input
            className="border border-gray-500 px-8 py-1 rounded-lg"
            type="text"
            onChange={(e) => setSearchVehicle(e.target.value)}
          />
          <FaSearch className="absolute top-2 left-2" />
        </div>
        <button
          className="bg-red-800 text-white py-1 border border-red-800 ml-5 px-4 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center"
          onClick={() =>
            history.push(`/search-by-reg?search=${searchVehicle}&page=1`)
          }
        >
          <FaSearch className="mr-2" />
          Search
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-5 border border-gray-400 rounded-md p-5">
          <table className="common__table">
            <thead>
              <tr>
                <th>Registration No</th>
                <th>Vehicle Model</th>
                <th>Model Year</th>
                <th>Owner</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {vehicleList?.data?.data?.map((data, index) => (
                <tr key={index}>
                  <td>{data?.registration_no}</td>
                  <td>{data?.model}</td>
                  <td>{data?.model_year}</td>
                  <td>{data?.customer_name}</td>
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
            totalPage={vehicleList?.data?.last_page}
            pageNumber={vehicleList?.data?.current_page}
            pageLinks={vehicleList?.data?.links}
            handlePagination={handlePagination}
          />
        </div>
      )}
    </>
  );
}
