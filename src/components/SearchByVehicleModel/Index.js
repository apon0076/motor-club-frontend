import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicleList } from "../../store/VehicleModel/vehicleModelAction";
import VehicleList from "./VehicleList";

export default function Index() {
  const dispatch = useDispatch();
  const vehicleList = useSelector((state) => state.vehicleModel.car);
  useEffect(() => {
    dispatch(fetchVehicleList());
  }, []);
  return <VehicleList vehicleList={vehicleList} />;
}
