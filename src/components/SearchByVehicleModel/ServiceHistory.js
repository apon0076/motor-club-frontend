import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCarId, getCustomerId, getInvoiceId } from "../../store/Invoice/invoiceAction";

export default function ServiceHistory({ details }) {
  const dispatch = useDispatch();
  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };
  return (
    <div>
      <p className="font-semibold text-lg mt-10 mb-5">Service History</p>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        <table className="common__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Expenses</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details?.data?.map((data, index) => (
              <tr key={index}>
                <td>{data?.date_out}</td>
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
      </div>
    </div>
  );
}
