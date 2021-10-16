import axios from "axios";
import {
  CUSTOMER_ID,
  FETCH_VEHICLE_LIST,
  SEARCH_VEHICLE_MODEL,
  VEHICLE_DETAILS,
  VEHICLE_DETAILS_ID,
  VEHICLE_LIST_PAGINATION,
} from "./vehicleModelActionTypes";

function fetchVehicle(data) {
  return {
    type: FETCH_VEHICLE_LIST,
    payload: data,
  };
}
function vehiclePagination(data) {
  return {
    type: VEHICLE_LIST_PAGINATION,
    payload: data,
  };
}
function searchVehicleModel(data) {
  return {
    type: SEARCH_VEHICLE_MODEL,
    payload: data,
  };
}
function vehicleModelDetails(data) {
  return {
    type: VEHICLE_DETAILS,
    payload: data,
  };
}
export function vehicleDetailsId(car) {
  return {
    type: VEHICLE_DETAILS_ID,
    payload: car,
  };
}
export function customerDetails_id(user) {
  return {
    type: CUSTOMER_ID,
    payload: user,
  };
}
export function fetchVehicleList() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/carlist`
      );
      dispatch(fetchVehicle(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function vehicleListPagination(pageNumber) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/carlist?page=${pageNumber}`
      );
      dispatch(vehiclePagination(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function searchByVehicleModel(search = "") {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/search-by-model?search=${search}`
      );
      dispatch(searchVehicleModel(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function fetchVehicleModelDetails(user, car) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/search-by-model/${user}/${car}`
      );
      dispatch(vehicleModelDetails(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
