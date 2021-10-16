import {
    AUTH_ERROR,
    AUTH_PROCESS,
    USER_LOGIN,
    USER_LOGOUT,
  } from "./userActionTypes";
  const initialState = {
    token: window.localStorage.getItem("authToken") || "",
    error: "",
    message: "",
    currentUser: {},
    isLoading: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
          case USER_LOGIN:
        window.localStorage.setItem("authToken", action.payload.token);
        window.localStorage.setItem("authEmail", action.payload.email);
        return {
          ...state,
          token: action.payload.token,
          email: action.payload.email,
          isLoading: false,
        };
      case USER_LOGOUT:
        window.localStorage.removeItem("authToken");
        return {
          token: "",
          isLoading: false,
        };
      case AUTH_PROCESS:
        return {
          ...state,
          isLoading: true,
        };
      case AUTH_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;