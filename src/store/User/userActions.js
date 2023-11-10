import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
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
      payload: error.message,
    });
  }
};
