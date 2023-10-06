import axios from "axios";
import {
  AUTH_ERROR,
  AUTH_PROCESS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
} from "./userActionTypes";

function authProcess() {
  return {
    type: AUTH_PROCESS,
  };
}

function loginDone(user) {
  return {
    type: USER_LOGIN,
    payload: user,
  };
}
function authFail(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function userLogin(userInfo) {
  return async (dispatch) => {
    dispatch(authProcess());
    const { email } = userInfo;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        userInfo
      );
      dispatch(loginDone({ ...res.data, ...{ email } }));
    } catch (error) {
      dispatch(authFail(error.Error));
    }
  };
}

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
