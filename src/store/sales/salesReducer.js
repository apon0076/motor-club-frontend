import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_ERROR,
  FETCH_SALES_RESET,
} from "./salesActionTypes";

const initialState = {
  isLoading: false,
  salesList: [],
  error: null
};

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALES_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SALES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        salesList: action.payload,
      };
    case FETCH_SALES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_SALES_RESET:
      return { salesList: [], isLoading: false, error: null };
    default:
      return state;
  }
};

export default salesReducer;
