import axios from "axios";
import {
  CAR_ID,
  FETCH_INVOICE,
  FETCH_INVOICE_LIST_REQUEST,
  FETCH_INVOICE_LIST_SUCCESS,
  FETCH_INVOICE_LIST_ERROR,
  INVOICE_ID,
  USER_ID,
} from "./invoiceActionTypes";


function fetchInvoice(data) {
  return {
    type: FETCH_INVOICE,
    payload: data,
  };
}
export function getInvoiceId(data) {
  return {
    type: INVOICE_ID,
    payload: data,
  };
}
export function getCustomerId(data) {
  return {
    type: USER_ID,
    payload: data,
  };
}
export function getCarId(data) {
  return {
    type: CAR_ID,
    payload: data,
  };
}

// Fetch Invoice List
export const fetchAllInvoiceList = (search, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_INVOICE_LIST_REQUEST });
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/customer/invoice?search=${search}&page=${page}`
    );
    dispatch({
      type: FETCH_INVOICE_LIST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_INVOICE_LIST_ERROR,
      payload: error.message,
    });
  }
};

export function fetchInvoices(userID, carId, invoiceId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/customer/invoice/${userID}/${carId}/${invoiceId}`
      );
      dispatch(fetchInvoice(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
