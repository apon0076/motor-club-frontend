import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getCarId,
  getCustomerId,
  getInvoiceId,
} from "../../store/Invoice/invoiceAction";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

export default function InvoiceList({ invoiceList, isLoading }) {
  const [invoiceSearch, setInvoiceSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  //Handle Pagination
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    history.push(`/invoice?search=${invoiceSearch}&page=${pageNumber}`);
  };

  // Get Id
  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <input
              className="border border-gray-500 px-8 py-1 rounded-lg"
              type="text"
              onChange={(e) => setInvoiceSearch(e.target.value)}
            />
            <FaSearch className="absolute top-2 left-2" />
          </div>
          <button
            className="bg-red-800 text-white py-1 border border-red-800 ml-5 px-4 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center"
            onClick={() =>
              history.push(`/invoice?search=${invoiceSearch}&page=1`)
            }
          >
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>
        <Link to="/create-invoice">
          <button className="bg-red-800 border border-red-800 text-white py-1 ml-5 px-10 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center">
            <AiFillPlusCircle className="mr-3" size="1.3rem" />
            Add New
          </button>
        </Link>
      </div>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <table className="common__table mt-5">
              <thead>
                <tr className="border-b">
                  <th>Invoice No</th>
                  <th>Customer Name</th>
                  <th>Vehicle Reg No</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoiceList?.data?.map((invoice, index) => (
                  <tr key={index} className="border-b">
                    <td>{invoice?.id}</td>
                    <td>{invoice?.customer_name}</td>
                    <td>{invoice?.vehicle_reg_no}</td>
                    <td>{invoice?.final_price}</td>
                    <td>
                      <Link to={`/view-invoice/${invoice?.id}`}>
                        <button
                          className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900"
                          onClick={() =>
                            getId(
                              invoice?.customer_id,
                              invoice?.vehicle_id,
                              invoice?.id
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
            <Pagination
              totalPage={invoiceList?.last_page}
              pageNumber={invoiceList?.current_page}
              pageLinks={invoiceList?.links}
              handlePagination={handlePagination}
            />
          </>
        )}
      </div>
    </>
  );
}
