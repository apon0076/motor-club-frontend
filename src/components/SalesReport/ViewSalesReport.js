import React, { useState } from "react";
import { BsPrinterFill } from "react-icons/bs";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ViewSalesReport = () => {
  // Need to remove this state dynamic time
  const [expenses, setExpenses] = useState([
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "1",
      description: "One",
      amount: "100",
      total: "",
    },
    {
      voucherNo: "2",
      description: "One",
      amount: "100",
      total: "",
    },
  ]);
  return (
    <>
      <Link to="/sales-report">
        <button className="sales-report-back-button rounded flex items-center text-white font-semibold px-2 py-1 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer">
          <IoChevronBackCircleSharp className="mr-2" size="1.2rem" />
          Back to Sales Report List
        </button>
      </Link>

      <div className="mt-3 overflow-auto">
        <table className="w-full">
          <caption className="border border-gray-500 p-2 font-semibold">
            Monday, October 2, 2023
          </caption>
          <tr>
            <th className="whitespace-nowrap border border-gray-500 p-2 w-1/12">
              Inv No.
            </th>
            <th className="border border-gray-500 p-2 w-2/12">
              Payment Method
            </th>
            <th className="border border-gray-500 p-2 w-5/12">Description</th>
            <th className="border border-gray-500 p-2 w-2/12">Amount</th>
            <th className="border border-gray-500 p-2 w-2/12">Total</th>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2"></td>
            <td className="border border-gray-500 p-2"></td>
            <td className="border border-gray-500 p-2">Opening Balance Cash</td>
            <td className="border border-gray-500 p-2"></td>
            <td className="border border-gray-500 p-2">45200</td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2"></td>
            <td className="border border-gray-500 p-2"></td>
            <td className="border border-gray-500 p-2">Cash from Bank</td>
            <td className="border border-gray-500 p-2"></td>
            <td className="border border-gray-500 p-2">1000</td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2121</td>
            <td className="border border-gray-500 p-2">Cash</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2122</td>
            <td className="border border-gray-500 p-2">Cash</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2123</td>
            <td className="border border-gray-500 p-2">Cash</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">2124</td>
            <td className="border border-gray-500 p-2">Card</td>
            <td className="border border-gray-500 p-2">Car Wash</td>
            <td className="border border-gray-500 p-2">1000</td>
            <td className="border border-gray-500 p-2"></td>
          </tr>
          <tr>
            <th className="text-left p-2"></th>
            <th className="text-left p-2"></th>
            <th className="text-left p-2">Total Sales in Cash</th>
            <th className="text-left p-2">3000</th>
            <th className="text-left p-2"></th>
          </tr>
          <tr>
            <th className="text-left p-2"></th>
            <th className="text-left p-2"></th>
            <th className="text-left py-4 px-2">Total Cash</th>
            <th className="text-left p-2"></th>
            <th className="text-left p-2">48200</th>
          </tr>
        </table>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2 w-1/12"></th>
              <th className="border border-gray-500 p-2 w-2/12">Voucher No.</th>
              <th className="border border-gray-500 p-2 w-5/12">Description</th>
              <th className="border border-gray-500 p-2 w-2/12">Amount</th>
              <th className="border border-gray-500 p-2 w-2/12">Total</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((data, index) => (
              <tr key={index}>
                {index === 0 ? (
                  <td
                    rowspan={expenses.length}
                    className="border border-gray-500 p-2 font-bold text-center"
                  >
                    Date
                    <br />
                    10.2.2023
                  </td>
                ) : null}
                <td className="border border-gray-500 ">{data.voucherNo}</td>
                <td className="border border-gray-500 ">{data.description}</td>
                <td className="border border-gray-500 ">{data.amount}</td>
                <td className="border border-gray-500 ">{data.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full">
          <tr>
            <th className="text-left p-2 w-1/12"></th>
            <th className="text-left p-2 w-2/12"></th>
            <th className="text-left p-2 w-5/12">Total Expenses</th>
            <th className="text-left p-2 w-2/12">48200</th>
            <th className="text-left p-2 w-2/12"></th>
          </tr>
          <tr>
            <th className="text-left p-2"></th>
            <th className="text-left p-2"></th>
            <th className="text-left  py-4 px-2">Closing Balance Cash</th>
            <th className="text-left p-2"></th>
            <th className="text-left p-2">48200</th>
          </tr>
        </table>
        <table className="w-full">
          <tr>
            <th className="text-left p-2  w-1/12"></th>
            <th className="text-left p-2  w-2/12"></th>
            <th className="text-left p-2 border border-gray-500 w-5/12">
              Total Sales in Card
            </th>
            <th className="text-left p-2 border border-gray-500 w-2/12"></th>
            <th className="text-left p-2 border border-gray-500 w-2/12">
              48200
            </th>
          </tr>
          <tr>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2 border border-gray-500">
              Total Sales in Bkash
            </th>
            <th className="text-left p-2 border border-gray-500"></th>
            <th className="text-left p-2 border border-gray-500">48200</th>
          </tr>
          <tr>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2 border border-gray-500">
              Total Sales in Cash
            </th>
            <th className="text-left p-2 border border-gray-500"></th>
            <th className="text-left p-2 border border-gray-500">48200</th>
          </tr>
          <tr>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2 border border-gray-500">
              Total Sales in Others
            </th>
            <th className="text-left p-2 border border-gray-500"></th>
            <th className="text-left p-2 border border-gray-500">48200</th>
          </tr>
          <tr>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2  "></th>
            <th className="text-left p-2 border border-gray-500">
              Total Sales
            </th>
            <th className="text-left p-2 border border-gray-500"></th>
            <th className="text-left p-2 border border-gray-500">48200</th>
          </tr>
        </table>
      </div>
      <div className="sales-report-print-bar flex justify-center mt-5  p-4 bg-gray-100 shadow-md">
        <button
          onClick={() => {
            window.print();
          }}
          className="sales-report-back-button rounded flex items-center text-white font-semibold px-4 py-2 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer"
        >
          <BsPrinterFill className="mr-2" size="1.2rem" />
          Print
        </button>
      </div>
    </>
  );
};

export default ViewSalesReport;
