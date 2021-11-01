
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoices } from "../../store/Invoice/invoiceAction";
import Sidebar from "../Layouts/Sidebar";

export default function Invoice() {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.invoice.userID);
  const carId = useSelector((state) => state.invoice.carId);
  const invoiceId = useSelector((state) => state.invoice.invoiceId);
  const invoice = useSelector((state) => state.invoice.invoice);

  useEffect(() => {
    dispatch(fetchInvoices(userID, carId, invoiceId));
  }, [userID, carId, invoiceId]);
  console.log("userID", userID);
  console.log("carId", carId);
  console.log("invoiceId", invoiceId);
  console.log("invoice", invoice);
  return (
    <div className="flex">
      <div className="w-2/12 sidebarSection">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-10 bodySection">
        <div className="invoicePrint">
          <div className="flex  justify-between mt-5">
            <div className="w-4/12 ml-2">
              <strong className="text-lg">Customer Information</strong>
              <table className="invoice__table mt-3">
                <tr>
                  <th className="align-top">Name:</th>
                  <td className="pl-5 align-top">
                    {invoice?.invoice?.customer_name}
                  </td>
                </tr>
                <tr>
                  <th className="align-top">Address:</th>
                  <td className="pl-5 align-top">
                    {invoice?.customerInfo?.address}
                  </td>
                </tr>
                <tr>
                  <th className="align-top">Phone:</th>
                  <td className="pl-5 align-top">
                    {invoice?.customerInfo?.phone}
                  </td>
                </tr>
                <tr>
                  <th className="align-top">Attn Person:</th>
                  <td className="pl-5 align-top">
                    {invoice?.invoice?.attn_person}
                  </td>
                </tr>

                <tr>
                  <th className="align-top invoice__table--td">Service Technician:</th>
                  <td className="pl-5 align-top">
                    {invoice?.invoice?.service_technician}
                  </td>
                </tr>

              </table>
            </div>
            <p className="verticalBar"></p>
            <div className="w-5/12 ml-2">
              <table className=" invoice__table  mt-3">
                <tr>
                  <th className="align-top">Invoice No:</th>
                  <td className="pl-5 align-top">{invoice?.invoice?.id}</td>
                </tr>
                <tr>
                  <th className="align-top w-44">Next Service Date:</th>
                  <td className="pl-5 align-top">
                    {invoice?.invoice?.next_service_date}
                  </td>
                </tr>

                <tr>
                  <th className="align-top">Date In:</th>
                  <td className="pl-5 align-top">
                    {invoice?.invoice?.date_in}
                  </td>
                </tr>
                <tr>
                  <th className="align-top">Date Out:</th>
                  <td className="pl-5 align-top">
                    {invoice?.invoice?.date_out}
                  </td>
                </tr>
                <tr>
                  <th className="align-top">Vehicle Name:</th>
                  <td className="pl-5 align-top">{invoice?.carlist?.model}</td>
                </tr>
                <tr>
                  <th className="align-top">Vehicle Brand:</th>
                  <td className="pl-5 align-top">{invoice?.carlist?.brand}</td>
                </tr>
                <tr>
                  <th className="align-top">Reg No:</th>
                  <td className="pl-5 align-top">
                    {invoice?.carlist?.registration_no}
                  </td>
                </tr>
                
              </table>
            </div>
          </div>
          <table className="mt-5 w-full common-table">
            <thead className="border border-black">
              <tr>
                <th>Sl</th>
                <th>Description of Spare parts and Service</th>
                <th className="w-1/12">Qty</th>
                <th className="w-2/12 whitespace-nowrap">Unit Price</th>
                <th className="w-1/12 whitespace-nowrap">Discount (%)</th>
                <th className="w-2/12 whitespace-nowrap">Net Amount</th>
              </tr>
            </thead>

            <tbody className="border border-black">
              {invoice?.orderList?.map((data, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data?.task_name}</td>
                  <td>{data?.quantity}</td>
                  <td>{data?.unit_price}</td>
                  <td>{data?.discount}</td>
                  <td>{data?.neat_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-2">
            <table className="invoice__table  invoice__summary__table">
              <tr>
                <td className="w-6/12">Subtotal</td>
                <td className="w-6/12">{invoice?.invoice?.sub_total}</td>
              </tr>

              <tr>
                <td>Discount</td>
                <td>{invoice?.invoice?.discount}</td>
              </tr>
              <tr>
                <td>Payment Method</td>
                <td>
                  {invoice?.invoice?.payment_method === 1 ? (
                    <p>Cash</p>
                  ) : (
                    <p>Card</p>
                  )}
                </td>
              </tr>

              <tr>
                <td className="font-semibold text-xl w-5/12">Ground Total</td>
                <td className="font-semibold text-xl">
                  {invoice?.invoice?.final_price}
                </td>
              </tr>
            </table>
          </div>
          <div className="flex items-center justify-between mt-16">
            <div className="flex items-center justify-center flex-col">
              <p className="font-medium text-sm">
                **Note: There is no warranty or guarantee of AC service
              </p>
              <p className="font-medium text-sm">All prices are vat included</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="font-medium text-sm">Motors Club</p>
              <p className="font-medium text-sm">Unicare Automotives Bangladesh</p>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 transition-all ease-in-out delay-75 button__outline px-5 py-2"
              onClick={() => {
                console.log(window);
                window.print();
              }}
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}