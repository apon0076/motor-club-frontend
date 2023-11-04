import axios from "axios";
import {
  ADD_NEW_CAR,
  CUSTOMER_PROFILE,
  FETCH_CUSTOMER_LIST_ERROR,
  FETCH_CUSTOMER_LIST_REQUEST,
  FETCH_CUSTOMER_LIST_SUCCESS,
  SERVICE_HISTORY_PAGINATION
} from "./customerActionTypes";


function servicePagination(data) {
  return {
    type: SERVICE_HISTORY_PAGINATION,
    payload: data,
  };
}

function customerProfile(data) {
  return {
    type: CUSTOMER_PROFILE,
    payload: data,
  };
}

function addNewBrand(data) {
  return {
    type: ADD_NEW_CAR,
    payload: data,
  };
}

// Fetch All Customer List
export const fetchAllCustomers = (search, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CUSTOMER_LIST_REQUEST });
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/customer?search=${search}&page=${page}`
    );
    dispatch({
      type: FETCH_CUSTOMER_LIST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CUSTOMER_LIST_ERROR,
      payload: error.message,
    });
  }
};

export function fetchCustomerProfile(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/customer/${id}`
      );
      dispatch(customerProfile(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function serviceHistoryPagination(pageNumber, id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/customer/${id}?page=${pageNumber}`
      );
      dispatch(servicePagination(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const fetchAddNewBrand = (data) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/customer/vachele`,
        data
      );
    } catch (error) {}
  };
};
