import axios from "axios";
import {
  AUTH_ERROR,
  AUTH_PROCESS,
  USER_LOGIN,
  USER_LOGOUT,
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
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, userInfo);
      console.log(res.data);
      dispatch(loginDone({ ...res.data, ...{ email } }));
      debugger
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