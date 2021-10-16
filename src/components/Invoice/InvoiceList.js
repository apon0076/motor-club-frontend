import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCarId,
  getCustomerId,
  getInvoiceId,
  invoiceListPagination,
} from "../../store/Invoice/invoiceAction";
import Pagination from "../Pagination/Pagination";

export default function InvoiceList({ invoiceList }) {
  const dispatch = useDispatch();
  console.log("invoiceList", invoiceList);
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    console.log(pageNumber);
    dispatch(invoiceListPagination(pageNumber));
  };
  const getId = (user, car, invoice) => {
    dispatch(getInvoiceId(invoice));
    dispatch(getCustomerId(user));
    dispatch(getCarId(car));
  };
  return (
    <div>
      <div className="flex justify-end">
        <div className="relative">
          <input className="border border-black px-8 py-1" type="text" />
          <FaSearch className="absolute top-2 left-2" />
        </div>
        <Link to="/create-invoice">
          <button className="bg-red-800 text-white py-1 ml-5 px-10 transition-all ease-in-out hover:bg-red-900 flex items-center">
            <AiFillPlusCircle className="mr-3" size="1.3rem" />
            Add New
          </button>
        </Link>
      </div>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        <table className="common__table mt-5">
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Vehicle Reg No</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceList?.data?.map((invoice, index) => (
              <tr key={index}>
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
      </div>
    </div>
  );
}
