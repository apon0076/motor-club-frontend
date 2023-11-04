import axios from "axios";
import {
  FETCH_VEHICLE_LIST_ERROR,
  FETCH_VEHICLE_LIST_REQUEST,
  FETCH_VEHICLE_LIST_SUCCESS
} from "./vehicleRegNoActionTypes";

// Fetch All Vehicle List
export const fetchAllVehicleListByReg = (search, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_VEHICLE_LIST_REQUEST });
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/search-by-registration?search=${search}&page=${page}`
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
