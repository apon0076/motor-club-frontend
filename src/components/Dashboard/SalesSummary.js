import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCarId,
  getCustomerId,
  getInvoiceId,
} from "../../store/Invoice/invoiceAction";
import { fetchAllSales } from "../../store/sales/salesAction";
import Loader from "../Loader/Loader";

export default function SalesSummary() {
  const dispatch = useDispatch();
  const { salesList, isLoading } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchAllSales());
  }, []);
  let sum = 0;
  salesList?.data?.data
    ?.filter((sale, index) => index < 10)
    ?.map((list) => (sum += Number(list?.final_price)));

  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };
  return (
    <div>
      <p className="mt-10 text-2xl font-semibold">Sales</p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-5 border border-gray-400 rounded-md p-5">
            <table className="common__table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Customer Name</th>
                  <th>Phone No</th>
                  <th>Vehicle Reg</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {salesList?.data?.data?.length &&
                  salesList?.data?.data
                    ?.filter((sale, index) => index < 10)
                    ?.map((list, i) => (
                      <tr key={i}>
                        <td>{list?.id}</td>
                        <td>{list?.customer_name}</td>
                        <td>{list?.mobile}</td>
                        <td>{list?.vehicle_reg_no}</td>
                        <td>{list?.final_price}</td>
                        <td>
                          <Link to={`/view-invoice/${list?.id}`}>
                            <button
                              className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900"
                              onClick={() =>
                                getId(
                                  list?.customer_id,
                                  list?.vehicle_id,
                                  list?.id
                                )
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
          <div className="flex items-end justify-end">
            <p className="font-semibold text-lg mt-5"> Total: {sum}</p>
          </div>
          <Link className="flex justify-end mt-2" to="/sales">
            <button className="bg-red-800 text-white p-2 transition-all ease-in-out hover:bg-red-900">
              See All
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
