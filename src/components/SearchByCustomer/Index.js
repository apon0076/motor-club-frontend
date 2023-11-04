import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { fetchAllCustomers } from "../../store/Customer/customerAction";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

export default function Index() {
  const [searchCustomer, setSearchCustomer] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // Push Query Params
  useEffect(() => {
    history.push(`/search-by-customer?search=&page=1`);
  }, []);

  // Handle Pagination
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    history.push(
      `/search-by-customer?search=${searchCustomer}&page=${pageNumber}`
    );
  };

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const search = getQueryParams.get("search");
  const page = getQueryParams.get("page");

  // API Call for Customer List
  useEffect(() => {
    dispatch(
      fetchAllCustomers(
        search !== null ? search : "",
        page !== null ? page : ""
      )
    );
  }, [search, page]);

  // Get Value from Reducer
  const { customer, isLoading } = useSelector((state) => state.customer);
  return (
    <>
      <div className="flex items-center justify-end">
        <div className="relative">
          <input
            className="border border-gray-500 px-8 py-1 rounded-lg"
            type="text"
            onChange={(e) => setSearchCustomer(e.target.value)}
          />
          <FaSearch className="absolute top-2 left-2" />
        </div>
        <button
          className="bg-red-800 text-white py-1 border border-red-800 ml-5 px-4 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center"
          onClick={() =>
            history.push(`/search-by-customer?search=${searchCustomer}&page=1`)
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
                <th>Customer Name</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customer?.data?.data.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <Link to={`/customer-profile/${customer.id}`}>
                      <button className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalPage={customer?.data?.last_page}
            pageNumber={customer?.data?.current_page}
            pageLinks={customer?.data?.links}
            handlePagination={handlePagination}
          />
        </div>
      )}
    </>
  );
}
