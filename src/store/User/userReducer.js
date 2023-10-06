import {
  AUTH_ERROR,
  AUTH_PROCESS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_REGISTER_RESET,
} from "./userActionTypes";
const initialState = {
  token: window.localStorage.getItem("authToken") || "",
  error: "",
  message: "",
  currentUser: {},
  addUsers: [],
  isLoading: false,
  success: true,
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

// Add User Reducer
export const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, isLoading: true, success: false };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        addUsers: action.payload,
      };
    case USER_REGISTER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return { addUsers: [], isLoading: false, error: null };
    default:
      return state;
  }
};
