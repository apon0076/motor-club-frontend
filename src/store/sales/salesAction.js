import axios from "axios";
import {
  FETCH_SALES_LIST,
  FETCH_SALES_LIST_PAGINATION,
  FILTER_BY_DATE,
} from "./salesActionTypes";

function fetchSales(data) {
  return {
    type: FETCH_SALES_LIST,
    payload: data,
  };
}

function fetchSalesPagination(data) {
  return {
    type: FETCH_SALES_LIST_PAGINATION,
    payload: data,
  };
}
function filterByDate(data) {
  return {
    type: FILTER_BY_DATE,
    payload: data,
  };
}
export function fetchSalesList() {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/customer/sales`
      );
      dispatch(fetchSales(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function fetchSalesListPagination(page_number) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/customer/sales?page=${page_number}`
      );
      dispatch(fetchSalesPagination(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const fetchFilterByDate = (min_date, max_date) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/customer/sales`,
        { min_date, max_date }
      );
      dispatch(filterByDate(res.data));
    } catch (error) {
      console.log("====================================");
      console.log(error.message);
      console.log("====================================");
    }
  };
};
