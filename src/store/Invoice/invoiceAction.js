import axios from "axios";
import {
  FETCH_INVOICE_LIST,
  FETCH_INVOICE_LIST_PAGINATION,
  FETCH_INVOICE,
  INVOICE_ID,
  USER_ID,
  CAR_ID,
} from "./invoiceActionTypes";

function fetchInvoiceList(data) {
  return {
    type: FETCH_INVOICE_LIST,
    payload: data,
  };
}
function invoicePagination(data) {
  return {
    type: FETCH_INVOICE_LIST_PAGINATION,
    payload: data,
  };
}
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
export function fetchAllInvoiceList() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/customer/invoice`
      );
      dispatch(fetchInvoiceList(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function invoiceListPagination(pageNumber) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/customer/invoice?page=${Number(pageNumber)}`
      );
      dispatch(invoicePagination(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
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
