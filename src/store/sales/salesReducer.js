import {
  FETCH_SALES_LIST,
  FETCH_SALES_LIST_PAGINATION,
  FILTER_BY_DATE,
} from "./salesActionTypes";

const initialState = {
  isLoading: false,
  salesList: [],
};

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALES_LIST:
      return {
        ...state,
        salesList: action.payload,
      };
    case FETCH_SALES_LIST_PAGINATION:
      return {
        ...state,
        salesList: action.payload,
      };
    case FILTER_BY_DATE:
      return {
        ...state,
        salesList: action.payload,
      };
    default:
      return state;
  }
};

export default salesReducer;
