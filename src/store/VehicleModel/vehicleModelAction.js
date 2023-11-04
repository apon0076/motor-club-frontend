import axios from "axios";
import {
  CUSTOMER_ID,
  FETCH_VEHICLE_LIST_ERROR,
  FETCH_VEHICLE_LIST_REQUEST,
  FETCH_VEHICLE_LIST_SUCCESS,
  VEHICLE_DETAILS,
  VEHICLE_DETAILS_ID
} from "./vehicleModelActionTypes";

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

// Fetch All Vehicle
export const fetchAllVehicle = (search, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_VEHICLE_LIST_REQUEST });
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/search-by-model?search=${search}&page=${page}`
    );
    dispatch({
      type: FETCH_VEHICLE_LIST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_VEHICLE_LIST_ERROR,
      payload: error.message,
    });
  }
};