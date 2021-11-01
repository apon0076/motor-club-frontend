import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicleModelDetails } from "../../store/VehicleModel/vehicleModelAction";
import Sidebar from "../Layouts/Sidebar";
import ServiceHistory from "../SearchByVehicleModel/ServiceHistory";

export default function VehicleProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.vehicleModel.customerId);
  console.log("user", user);
  const car = useSelector((state) => state.vehicleModel.vehicleDetailsId);
  console.log("car", car);
  const details = useSelector((state) => state.vehicleModel.vehicleDetails);
  console.log("new details", details);
  useEffect(() => {
    dispatch(fetchVehicleModelDetails(user, car));
  }, []);
  return (
    <div className="flex">
      <div className="w-2/12 sidebarSection">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-10 bodySection">
        <p>Reg Number: {details?.carlist?.registration_no}</p>
        <p>Vehicle Brand: {details?.carlist?.brand}</p>
        <p>Vehicle Series: {details?.carlist?.series}</p>
        <p>Vehicle Model: {details?.carlist?.model}</p>
        <p>Model Year: {details?.carlist?.model_year}</p>

        <p className="mt-10 mb-5 font-semibold text-lg">Owner:</p>

        <div className="border border-black p-2 flex items-center justify-between">
          <p>{details?.customerInfo?.name}</p>
          <p>{details?.customerInfo?.phone}</p>
          <p>{details?.customerInfo?.address}</p>
        </div>
        <ServiceHistory details={details?.invoiceList}/>
      </div>
    </div>
  );
}
