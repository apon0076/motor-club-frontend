import axios from "axios";
import {
  ADD_NEW_CAR,
  CUSTOMER_LIST_PAGINATION,
  CUSTOMER_PROFILE,
  FETCH_CUSTOMER_LIST,
  SERVICE_HISTORY_PAGINATION,
} from "./customerActionTypes";

function fetchCustomer(data) {
  return {
    type: FETCH_CUSTOMER_LIST,
    payload: data,
  };
}

function customerPagination(data) {
  return {
    type: CUSTOMER_LIST_PAGINATION,
    payload: data,
  };
}
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

export function fetchAllCustomers(search = "") {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/customer?search=${search}`)
      .then((res) => {
        dispatch(fetchCustomer(res.data));
      })
      .catch((err) => console.log(err.message));
  };
}

export function customerListPagination(pageNumber) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/customer?page=${pageNumber}`
      );
      dispatch(customerPagination(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
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
