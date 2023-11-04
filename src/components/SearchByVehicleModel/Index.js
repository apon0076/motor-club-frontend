import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchAllVehicle } from "../../store/VehicleModel/vehicleModelAction";
import VehicleList from "./VehicleList";

export default function Index() {
  const [searchVehicleModel, setSearchVehicleModel] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  // Push Query Params
  useEffect(() => {
    history.push(`/search-by-vehicle-model?search=&page=1`);
  }, []);

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const search = getQueryParams.get("search");
  const page = getQueryParams.get("page");

  // Call API for List
  useEffect(() => {
    dispatch(
      fetchAllVehicle(search !== null ? search : "", page !== null ? page : "")
    );
  }, [search, page]);

  // Get API Value from Reducer
  const { vehicles, isLoading } = useSelector((state) => state.vehicleModel);
  return (
    <VehicleList
      vehicleList={vehicles}
      setSearchVehicleModel={setSearchVehicleModel}
      searchVehicleModel={searchVehicleModel}
      isLoading={isLoading}
    />
  );
}
