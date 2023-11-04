import {
  FETCH_CUSTOMER_LIST_REQUEST,
  FETCH_CUSTOMER_LIST_SUCCESS,
  FETCH_CUSTOMER_LIST_ERROR,
  FETCH_CUSTOMER_LIST_RESET,
  CUSTOMER_PROFILE,
  SERVICE_HISTORY_PAGINATION,
} from "./customerActionTypes";

const initialState = {
  isLoading: false,
  customer: [],
  customerProfile: [],
  error: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_LIST_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customer: action.payload,
      };
    case FETCH_CUSTOMER_LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_CUSTOMER_LIST_RESET:
      return { customer: [], isLoading: false, error: null };
    case CUSTOMER_PROFILE:
      return {
        ...state,
        customerProfile: action.payload,
      };
    case SERVICE_HISTORY_PAGINATION:
      return {
        ...state,
        customerProfile: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducer;
