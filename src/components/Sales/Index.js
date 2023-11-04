import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  getCarId,
  getCustomerId,
  getInvoiceId,
} from "../../store/Invoice/invoiceAction";
import { fetchAllSales } from "../../store/sales/salesAction";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

export default function Index() {
  const dispatch = useDispatch();
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const history = useHistory();
  const location = useLocation();

  // Push Query Params
  useEffect(() => {
    history.push(`/sales?min=&max=&page=1`);
  }, []);

  // Get Current Date
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zero if month or day is a single digit
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
  }

  // Handle Pagination
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    history.push(`/sales?min=${minDate}&max=${maxDate}&page=${pageNumber}`);
  };

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const min = getQueryParams.get("min");
  const max = getQueryParams.get("max");
  const page = getQueryParams.get("page");

  // Date Format
  const m_shortdate = new Date(min).toLocaleDateString({
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const m_dd = m_shortdate?.substring(0, 2);
  const m_mm = m_shortdate?.substring(3, 5);
  const m_yyyy = m_shortdate?.substring(6, 10);
  const final_min_date = m_mm + "-" + m_dd + "-" + m_yyyy;
  const mx_shortdate = new Date(max).toLocaleDateString({
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const mx_dd = mx_shortdate?.substring(0, 2);
  const mx_mm = mx_shortdate?.substring(3, 5);
  const mx_yyyy = mx_shortdate?.substring(6, 10);
  const final_max_date = mx_mm + "-" + mx_dd + "-" + mx_yyyy;

  // Get Vehicle ID
  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };

  // API Call
  useEffect(() => {
    if (minDate !== "" && maxDate !== "" && minDate > maxDate) {
      alert("From Date is Larger Than To Date");
    } else {
      dispatch(
        fetchAllSales(
          minDate !== "" ? final_min_date : "",
          maxDate !== "" ? final_max_date : "",
          page
        )
      );
    }
  }, [final_min_date, final_max_date, page]);

  // Get Value from Reducer
  const { salesList, isLoading } = useSelector((state) => state.sales);

  // Calculate the Final Amount
  let sum = 0;
  salesList?.data?.data?.map((data) => (sum += Number(data?.final_price)));

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p>From Date:</p>
          <input
            className="border border-gray-500 px-8 py-1 rounded-lg ml-1"
            type="date"
            max={getCurrentDate()}
            onChange={(e) => setMinDate(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <p>To Date:</p>
          <input
            className="border border-gray-500 px-8 py-1 rounded-lg ml-1"
            type="date"
            max={getCurrentDate()}
            onChange={(e) => setMaxDate(e.target.value)}
          />
        </div>
        <button
          className="bg-red-800 text-white py-1 border border-red-800 ml-5 px-4 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center w-2/12 justify-center"
          onClick={() =>
            minDate !== "" && maxDate !== ""
              ? history.push(`/sales?min=${minDate}&max=${maxDate}&page=1`)
              : alert("Form Date & To Date Both are Required")
          }
        >
          <FaFilter className="mr-2" />
          Filter
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-5 border border-gray-400 rounded-md p-5 mb-3">
            <table className="common__table">
              <thead>
                <tr>
                  <th>Invoice No</th>
                  <th>Customer Name</th>
                  <th>Vehicle Reg No</th>
                  <th>Vehicle Model</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {salesList?.data?.data?.map((list, index) => (
                  <tr key={index}>
                    <td>{list?.id}</td>
                    <td>{list?.customer_name}</td>
                    <td>{list?.vehicle_reg_no}</td>
                    <td>{list?.vehicle_model}</td>
                    <td>{list?.final_price}</td>
                    <td>
                      <Link to={`/view-invoice/${list?.id}`}>
                        <button
                          className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900"
                          onClick={() =>
                            getId(list?.customer_id, list?.vehicle_id, list?.id)
                          }
                        >
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-end">
              <p className="text-end mr-64">Total: {sum}</p>
            </div>
          </div>
          <Pagination
            totalPage={salesList?.data?.last_page}
            pageNumber={salesList?.data?.current_page}
            pageLinks={salesList?.data?.links}
            handlePagination={handlePagination}
          />
        </>
      )}
    </>
  );
}
