import React, { useState } from "react";
import { FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";
import DeleteModalContent from "../WarningModal/DeleteModalContent";

const AddSalesReport = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState();
  const [expenses, setExpenses] = useState([
    {
      voucherNo: "",
      description: "",
      amount: "",
      total: "",
    },
  ]);

  //Delete Modal Open & Close Functions
  const onOpenDeleteModal = (index) => {
    setDeleteModalOpen(true);
    setDeleteItemIndex(index);
  };
  const onCloseDeleteModal = () => setDeleteModalOpen(false);

  // Handle Add Expenses Row
  const handleAddExpenses = () => {
    setExpenses([
      ...expenses,
      {
        voucherNo: "",
        description: "",
        amount: "",
        total: "",
      },
    ]);
  };

  // Handle Remove Expenses Row
  const handleRemoveExpenses = (index) => {
    const list = [...expenses];
    list.splice(index, 1);
    setExpenses(list);
    setDeleteModalOpen(false);
  };

  // Handle Change Expenses Value
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...expenses];
    list[i][name] = value;
    setExpenses(list);
  };

  return (
    <>
      <Link to="/sales-report">
        <button className="rounded flex items-center text-white font-semibold px-2 py-1 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer">
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
            <td className="border border-gray-500 ">
              <input
                placeholder="Enter Amt."
                className="p-2 outline-none w-full"
                type="number"
              />
            </td>
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
            <th className="text-left p-2"></th>
            <th className="text-left p-2"></th>
            <th className="text-left p-2">Total Sales in Cash</th>
            <th className="text-left p-2">3000</th>
            <th className="text-left p-2"></th>
          </tr>
          <tr>
            <th className="text-left p-2"></th>
            <th className="text-left p-2"></th>
            <th className="text-left p-2">Total Cash</th>
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
              <th className="border border-gray-500 p-2 w-1/12">Total</th>
              <th className="border border-gray-500 p-2 w-1/12">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((data, index) => (
              <tr key={index}>
                {index === 0 ? (
                  <td
                    rowspan={expenses.length}
                    class="border border-gray-500 p-2 font-bold text-center"
                  >
                    Date
                    <br />
                    10.2.2023
                  </td>
                ) : null}
                <td class="border border-gray-500 ">
                  <input
                    placeholder="Enter Voucher No."
                    className="p-2 outline-none w-full"
                    type="number"
                    name="voucherNo"
                    value={data.voucherNo}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td class="border border-gray-500 ">
                  <input
                    placeholder="Enter Description"
                    className="p-2 outline-none w-full"
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td class="border border-gray-500 ">
                  <input
                    placeholder="Enter Amt"
                    className="p-2 outline-none w-full"
                    type="number"
                    name="amount"
                    value={data.amount}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td class="border border-gray-500 ">
                  <input
                    placeholder="Enter Total"
                    className="p-2 outline-none w-full"
                    type="number"
                    name="total"
                    value={data.total}
                    onChange={(e) => handleChange(e, index)}
                  />
                </td>
                <td class="border border-gray-500 p-2 ">
                  {expenses.length - 1 === index ? (
                    <button
                      onClick={() => handleAddExpenses()}
                      className="bg-green-600 p-2 rounded-full transition-all ease-in-out hover:bg-green-800 cursor-pointer mr-1"
                    >
                      <RiAddCircleFill className="text-white" />
                    </button>
                  ) : null}
                  {expenses.length > 1 ? (
                    <button
                      onClick={() => onOpenDeleteModal(index)}
                      className="bg-red-600 p-2 rounded-full transition-all ease-in-out hover:bg-red-800 cursor-pointer"
                    >
                      <FaTrashAlt className="text-white" />
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
            <tr>
              <th className="text-left p-2"></th>
              <th className="text-left p-2"></th>
              <th className="text-left p-2">Total Expenses</th>
              <th className="text-left p-2">48200</th>
              <th className="text-left p-2"></th>
              <th className="text-left p-2"></th>
            </tr>
            <tr>
              <th className="text-left p-2"></th>
              <th className="text-left p-2"></th>
              <th className="text-left p-2">Closing Balance Cash</th>
              <th className="text-left p-2"></th>
              <th className="text-left p-2">48200</th>
              <th className="text-left p-2"></th>
            </tr>
            <tr>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2 border border-gray-500">
                Total Sales in Card
              </th>
              <th className="text-left p-2 border border-gray-500"></th>
              <th className="text-left p-2 border border-gray-500">48200</th>
              <th className="text-left p-2  "></th>
            </tr>
            <tr>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2 border border-gray-500">
                Total Sales in Bkash
              </th>
              <th className="text-left p-2 border border-gray-500"></th>
              <th className="text-left p-2 border border-gray-500">48200</th>
              <th className="text-left p-2  "></th>
            </tr>
            <tr>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2 border border-gray-500">
                Total Sales in Cash
              </th>
              <th className="text-left p-2 border border-gray-500"></th>
              <th className="text-left p-2 border border-gray-500">48200</th>
              <th className="text-left p-2  "></th>
            </tr>
            <tr>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2 border border-gray-500">
                Total Sales in Others
              </th>
              <th className="text-left p-2 border border-gray-500"></th>
              <th className="text-left p-2 border border-gray-500">48200</th>
              <th className="text-left p-2  "></th>
            </tr>
            <tr>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2  "></th>
              <th className="text-left p-2 border border-gray-500">
                Total Sales
              </th>
              <th className="text-left p-2 border border-gray-500"></th>
              <th className="text-left p-2 border border-gray-500">48200</th>
              <th className="text-left p-2  "></th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sales-report-print-bar flex justify-center mt-5  p-4 bg-gray-100 shadow-md">
        <button className="sales-report-back-button rounded flex items-center text-white font-semibold px-4 py-2 bg-red-800 transition-all ease-in-out hover:bg-red-900 cursor-pointer">
          <FaRegCheckCircle className="mr-2" size="1.2rem" />
          Generate Sales Report
        </button>
      </div>
      <Modal open={deleteModalOpen} onClose={onCloseDeleteModal} center>
        <DeleteModalContent
          item={deleteItemIndex}
          onCloseModal={onCloseDeleteModal}
          handleFunction={handleRemoveExpenses}
        />
      </Modal>
    </>
  );
};

export default AddSalesReport;
