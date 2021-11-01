import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerDetails_id, vehicleDetailsId, vehicleListPagination } from "../../store/VehicleModel/vehicleModelAction";
import { fetchAllVehicleListByReg } from "../../store/vehicleRegNo/vehicleRegNoAction";
import Sidebar from "../Layouts/Sidebar";
import Pagination from "../Pagination/Pagination";

export default function Index() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const vehicleList = useSelector((state) => state.vehicleReg.vehicleList);
  console.log("vechile list", vehicleList);
  useEffect(() => {
    dispatch(fetchAllVehicleListByReg(search));
  }, [search]);
  const handleSearchByReg = (e) => {
    setSearch(e.target.value);
  };
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    dispatch(vehicleListPagination(pageNumber));
  };
  const getId = (user, car) => {
    dispatch(customerDetails_id(user));
    dispatch(vehicleDetailsId(car));
  };
  return (
    <div className="flex">
      <div className="w-2/12 sidebarSection">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-10 bodySection">
        <div className="flex items-center justify-end">
          <div className="relative">
            <input
              className="border border-black px-8 py-1 outline-none"
              type="text"
              onChange={(e) => handleSearchByReg(e)}
            />
            <FaSearch className="absolute top-2 left-2" />
          </div>
        </div>
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
              {vehicleList?.data?.map((data, index) => (
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
            totalPage={vehicleList?.last_page}
            pageNumber={vehicleList?.current_page}
            pageLinks={vehicleList?.links}
            handlePagination={handlePagination}
          />
        </div>
      </div>
    </div>
  );
}
