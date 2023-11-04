import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { serviceHistoryPagination } from "../../store/Customer/customerAction";
import Pagination from "../Pagination/Pagination";
import {
  getCarId,
  getCustomerId,
  getInvoiceId,
} from "../../store/Invoice/invoiceAction";

export default function ServiceHistory({ invoice }) {
  const customerId = useParams();
  const id = customerId.id;
  const dispatch = useDispatch();
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    dispatch(serviceHistoryPagination(pageNumber, id));
  };
  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };
  return (
    <div>
      <p className="font-semibold text-lg my-5">Service History</p>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        <table className="common__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle Reg No</th>
              <th>Expenses</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoice?.data?.map((data, index) => (
              <tr key={index}>
                <td>{data?.date_in}</td>
                <td>{data?.vehicle_reg_no}</td>
                <td>{data?.final_price}</td>
                <td>
                  <Link to={`/view-invoice/${data?.id}`}>
                    <button
                      className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900"
                      onClick={() =>
                        getId(data?.customer_id, data?.vehicle_id, data?.id)
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
        <Pagination
          totalPage={invoice?.last_page}
          pageNumber={invoice?.current_page}
          pageLinks={invoice?.links}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
}
