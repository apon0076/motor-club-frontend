import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_ERROR,
  SINGLE_USER_REQUEST,
  SINGLE_USER_SUCCESS,
  SINGLE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./userActionTypes";

// Post Login API
export const userLogin = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/login`,
      userInfo
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload: error.message,
    });
  }
};

export function userLogOut() {
  return {
    type: USER_LOGOUT,
  };
}

//Add User
export const addUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/register`,
      data
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_ERROR,
      payload: error,
    });
  }
};

//List of Users
export const usersList = (page) => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users?page=${page}`
    );
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_ERROR,
      payload: error,
    });
  }
};

//Single User
export const getSingleUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_USER_REQUEST });
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users/${id}`
    );
    dispatch({
      type: SINGLE_USER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_USER_ERROR,
      payload: error,
    });
  }
};

//Update User
export const updateUser = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
      data
    );
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: error,
    });
  }
};
