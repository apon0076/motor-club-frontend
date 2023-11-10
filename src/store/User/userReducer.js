import {
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_REGISTER_RESET,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_RESET,
} from "./userActionTypes";
const initialState = {
  token: "",
  message: "",
  currentUser: {},
  addUsers: [],
  isLoading: false,
  success: true,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };
    case USER_LOGIN_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case USER_LOGIN_RESET:
      return { invoiceList: [], isLoading: false, error: null };
    case USER_LOGOUT:
      window.localStorage.removeItem("authToken");
      return {
        token: "",
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
