import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCarId,
  getCustomerId,
  getInvoiceId,
} from "../../store/Invoice/invoiceAction";
import {
  fetchFilterByDate,
  fetchSalesList,
  fetchSalesListPagination,
} from "../../store/sales/salesAction";
import Sidebar from "../Layouts/Sidebar";
import Pagination from "../Pagination/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [minDate, setMinDate] = useState("");
  const [MaxDate, setMaxDate] = useState("");

  const m_shortdate = new Date(minDate).toLocaleDateString({
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const m_dd = m_shortdate?.substring(0, 2);
  const m_mm = m_shortdate?.substring(3, 5);
  const m_yyyy = m_shortdate?.substring(6, 10);
  const final_min_date = m_mm + "-" + m_dd + "-" + m_yyyy;
  const mx_shortdate = new Date(MaxDate).toLocaleDateString({
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const mx_dd = mx_shortdate?.substring(0, 2);
  const mx_mm = mx_shortdate?.substring(3, 5);
  const mx_yyyy = mx_shortdate?.substring(6, 10);
  const final_max_date = mx_mm + "-" + mx_dd + "-" + mx_yyyy;
  const sales = useSelector((state) => state.sales.salesList);
  useEffect(() => {
    dispatch(fetchSalesList());
  }, []);
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    dispatch(fetchSalesListPagination(pageNumber));
  };
  let sum = 0;
  sales?.data?.map((data) => (sum += Number(data?.final_price)));
  useEffect(() => {
    if (minDate == "") {
      dispatch(fetchFilterByDate(minDate, MaxDate));
    } else {
      dispatch(fetchFilterByDate(final_min_date, final_max_date));
    }
  }, [MaxDate, minDate]);

  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p>From Date:</p>
          <input
            className="border border-black p-2 ml-3"
            type="date"
            onChange={(e) => setMinDate(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <p>To Date:</p>
          <input
            className="border border-black p-2 ml-3"
            type="date"
            onChange={(e) => setMaxDate(e.target.value)}
          />
        </div>
      </div>

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
            {sales?.data?.map((list, index) => (
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
        totalPage={sales?.last_page}
        pageNumber={sales?.current_page}
        pageLinks={sales?.links}
        handlePagination={handlePagination}
      />
    </>
  );
}
