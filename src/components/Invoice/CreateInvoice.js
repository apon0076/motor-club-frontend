import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchOldRegistration } from "../../store/Registration/registrationAction";
import Sidebar from "../Layouts/Sidebar";

export default function CreateInvoice() {
  const dispatch = useDispatch();
  const [vehicleId, setVehicleId] = useState(null);
  const userID = useSelector((state) => state.invoice.userID);
  const user = useSelector((state) => state.user);
  const carId = useSelector((state) => state.invoice.carId);
  const invoiceId = useSelector((state) => state.invoice.invoiceId);
  const invoice = useSelector((state) => state.invoice.invoice);
  console.log(invoice);
  const [inputList, setInputList] = useState([
    {
      task_name: "",
      quantity: "",
      unit_price: "",
      discount: "",
      neat_amnt: "",
    },
  ]);
  const [discount, setDiscount] = useState(null);
  const [payment_method, setPayment_method] = useState(null);
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    const amount_price =
      list[i].unit_price * list[i].quantity -
      (list[i].unit_price * list[i].quantity * list[i].discount) / 100;
    list[i]["neat_amount"] = amount_price;
    setInputList(list);
  };
  const handleAddInput = () => {
    setInputList([
      ...inputList,
      {
        task_name: "",
        unit_price: "",
        discount: "",
        neat_amnt: "",
        quantity: "",
      },
    ]);
  };
  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  console.log(userID, carId, invoiceId);
  let sum = 0;
  inputList?.map((data) => {
    return (sum += Number(data.neat_amount));
  });
  console.log(sum);
  const discount_amount = sum - (sum * discount) / 100;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const oldReg = useSelector((state) => state.registration.oldReg);
  console.log("====================================");
  console.log(oldReg);
  console.log("====================================");
  const onSubmit = (data) => {
    console.log("customer_id", inputList);
    const id = oldReg?.vachele?.find(
      (Oldata) => Oldata.brand == data?.vehicle_model
    );
    console.log("====================================");
    console.log(id);
    console.log("====================================");

    axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/customer/invoice`,
      {
        ...data,
        inputList,
        customer_id: oldReg?.vachele[0].customer_id,
        vehicle_id: id?.id,
        sub_total: sum,
        discount,
        final_price: discount_amount,
        payment_method,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setTimeout(() => {
      history.push("/invoice");
    }, 2000);
  };
  console.log(inputList);

  console.log("vehicleId", vehicleId);
  const history = useHistory();

  const handleRoute = () => {};
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 px-6 py-20 mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label>Phone No</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="text"
                {...register("mobile", { required: true })}
                onChange={(e) => dispatch(fetchOldRegistration(e.target.value))}
              />
              {errors.mobile && (
                <p className="text-xs text-red-500">Phone No is required</p>
              )}
            </div>
            <div>
              <label>Customer Name</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="text"
                defaultValue={oldReg?.customer?.name}
                {...register("customer_name", { required: true })}
              />
              {errors.customer_name && (
                <p className="text-xs text-red-500">
                  Customer Name is required
                </p>
              )}
            </div>

            <div>
              <label>Vehicle</label>
              <br />
              <select
                className="border border-black outline-none px-2 py-2 w-8/12 mr-5"
                {...register("vehicle_model", { required: true })}
              >
                {oldReg?.vachele?.map((data) => (
                  <option value={data?.brand}>{data?.brand}</option>
                ))}
              </select>
              {errors.vehicle_model && (
                <p className="text-xs text-red-500">Vehicle is required</p>
              )}
            </div>

            <div>
              <label>Email</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">Email is required</p>
              )}
            </div>

            <div>
              <label>Attn Person</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="text"
                {...register("attn_person", { required: true })}
              />
              {errors.attn_person && (
                <p className="text-xs text-red-500">Attn Person is required</p>
              )}
            </div>

            <div>
              <label>Vehicle Registration No</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="text"
                {...register("vehicle_reg_no", { required: true })}
              />
              {errors.vehicle_reg_no && (
                <p className="text-xs text-red-500">
                  Vehicle Registration is required
                </p>
              )}
            </div>

            <div>
              <label>Date In </label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="date"
                {...register("date_in", { required: true })}
              />
              {errors.date_in && (
                <p className="text-xs text-red-500">Date In is required</p>
              )}
            </div>

            <div>
              <label>Date Out</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="date"
                {...register("date_out", { required: true })}
              />
              {errors.date_out && (
                <p className="text-xs text-red-500">Date Out is required</p>
              )}
            </div>
            <div>
              <label>Next Service Date</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="date"
                {...register("next_service_date", { required: true })}
              />
              {errors.next_service_date && (
                <p className="text-xs text-red-500">
                  Next Service Date is required
                </p>
              )}
            </div>

            <div>
              <label>Service Technician</label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-8/12"
                type="text"
                {...register("service_technician", { required: true })}
              />
              {errors.service_technician && (
                <p className="text-xs text-red-500">
                  Service Technician is required
                </p>
              )}
            </div>
          </div>

          <p className="mt-10 mb-5">Work done with this vehicle:</p>
          {inputList?.map((item, i) => {
            return (
              <div key={i} className="mt-4 flex items-center justify-between">
                <div className="w-4/12">
                  <label>Description</label>
                  <br />
                  <input
                    className="border border-black px-2 py-1 w-full"
                    type="text"
                    name="task_name"
                    value={item.task_name}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="w-1/12">
                  <label>Qty</label>
                  <br />
                  <input
                    className="border border-black px-2 py-1 w-full"
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="w-1/12">
                  <label>Unit Price</label>
                  <br />
                  <input
                    className="border border-black px-2 py-1 w-full"
                    type="number"
                    name="unit_price"
                    value={item.unit_price}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="w-1/12">
                  <label>Discount(%)</label>
                  <br />
                  <input
                    className="border border-black px-2 py-1 w-full"
                    type="number"
                    name="discount"
                    value={item.discount}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="w-1/12">
                  <label>Net Amount</label>
                  <br />
                  <input
                    className="border border-black px-2 py-1 w-full"
                    type="number"
                    name="neat_amount"
                    value={
                      item.unit_price * item.quantity -
                      (item.unit_price * item.quantity * item.discount) / 100
                    }
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>

                <div className="w-1/12 flex items-center justify-between">
                  {inputList.length - 1 === i && (
                    <div>
                      <br />
                      <div className="cursor-pointer" onClick={handleAddInput}>
                        <FaPlusSquare size="1.7rem" />
                      </div>
                    </div>
                  )}
                  {inputList.length !== 1 && (
                    <div>
                      <br />
                      <div
                        className="cursor-pointer"
                        onClick={handleRemoveInput}
                      >
                        <FaMinusSquare size="1.7rem" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="flex items-end justify-end mt-16">
            <p className="font-semibold text-lg ">Sub Total: {sum} Tk</p>
          </div>
          <div className="flex flex-col items-end justify-end mt-5">
            <label>Gross Discount(%):</label>
            <input
              className="px-2 py-1 border border-black"
              type="number"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="flex items-end justify-end mt-5">
            <p className="font-semibold text-lg ">
              Total: {discount_amount} Tk
            </p>
          </div>
          <div className="flex items-end justify-end mt-5">
            <div>
              <p className="font-semibold text-lg">Payment Method</p>
               
              <input
                className="mr-1"
                type="radio"
                id="cash"
                name="payment_method"
                onClick={() => setPayment_method(1)}
              />
               
              <label className="mr-3" htmlFor="cash">
                Cash
              </label>
               
              <input
                className="mr-1"
                type="radio"
                id="card"
                name="payment_method"
                onClick={() => setPayment_method(2)}
              />
               
              <label className="mr-3" htmlFor="card">
                Card
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="bg-red-800 text-white py-2 px-10 transition-all ease-in-out hover:bg-red-900 mt-10 cursor-pointer"
              type="submit"
              value="Generate"
              onClick={handleRoute}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
