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
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_ERROR,
  USER_LIST_RESET,
  SINGLE_USER_REQUEST,
  SINGLE_USER_SUCCESS,
  SINGLE_USER_ERROR,
  SINGLE_USER_RESET,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_RESET,
} from "./userActionTypes";

const initialState = {
  token: window.localStorage.getItem("authToken") || "",
  message: "",
  currentUser: {},
  addUsers: [],
  userList: [],
  updateSingleUser: [],
  singleUser: {},
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
        token: action.payload.data.token,
        isLoading: false,
      };
    case USER_LOGIN_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case USER_LOGIN_RESET:
      return { token: [], isLoading: false, error: null };

    case USER_LIST_REQUEST:
      return { ...state, isLoading: true };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
      };
    case USER_LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case USER_LIST_RESET:
      return { userList: [], isLoading: false, error: null };

    // Single User Start
    case SINGLE_USER_REQUEST:
      return { ...state, isLoading: true };
    case SINGLE_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
        isLoading: false,
      };
    case SINGLE_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case SINGLE_USER_RESET:
      return { singleUser: [], isLoading: false, error: null };

    // Single User End
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

// Update User Reducer
export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, isLoading: true, success: false };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        updateSingleUser: action.payload,
      };
    case UPDATE_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case UPDATE_USER_RESET:
      return { updateSingleUser: [], isLoading: false, error: null };
    default:
      return state;
  }
};
