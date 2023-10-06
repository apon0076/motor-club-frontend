import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchCustomerProfile } from "../../store/Customer/customerAction";
import ListOfVehicle from "./ListOfVehicle";
import ServiceHistory from "./ServiceHistory";

export default function CustomerProfile() {
  const customerId = useParams();
  const id = customerId.id;
  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state.customer.customerProfile);
  useEffect(() => {
    dispatch(fetchCustomerProfile(id));
  }, [id]);
  return (
    <>
      <p>
        <span className="font-semibold mr-3">Name:</span>{" "}
        {customerInfo?.customerInfo?.name}
      </p>
      <p>
        <span className="font-semibold mr-3">Phone:</span>{" "}
        {customerInfo?.customerInfo?.phone}
      </p>
      <p>
        <span className="font-semibold mr-3">Address:</span>{" "}
        {customerInfo?.customerInfo?.address}
      </p>
      <ListOfVehicle carlist={customerInfo?.carlist} />
      <ServiceHistory invoice={customerInfo?.invoiceList} />
    </>
  );
}
