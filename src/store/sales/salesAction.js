import axios from "axios";
import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_ERROR,
} from "./salesActionTypes";


// Fetch All Sales List
export const fetchAllSales = (min_date, max_date, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_SALES_REQUEST });
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/customer/sales?page=${page}`,
      { min_date, max_date }
    );
    dispatch({
      type: FETCH_SALES_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALES_ERROR,
      payload: error.message,
    });
  }
};
