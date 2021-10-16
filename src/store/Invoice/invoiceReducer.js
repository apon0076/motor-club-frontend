import {
  FETCH_INVOICE_LIST,
  FETCH_INVOICE_LIST_PAGINATION,
  FETCH_INVOICE,
  INVOICE_ID,
  USER_ID,
  CAR_ID,
} from "./invoiceActionTypes";

const initialState = {
  isLoading: false,
  invoiceList: [],
  invoice: [],
  invoiceId: {},
  userID: {},
  carId: {},
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVOICE_LIST:
      return {
        ...state,
        invoiceList: action.payload,
      };
    case FETCH_INVOICE_LIST_PAGINATION:
      return {
        ...state,
        invoiceList: action.payload,
      };
    case FETCH_INVOICE:
      return {
        ...state,
        invoice: action.payload,
      };
    case INVOICE_ID:
      return {
        ...state,
        invoiceId: action.payload,
      };
    case USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case CAR_ID:
      return {
        ...state,
        carId: action.payload,
      };

    default:
      return state;
  }
};

export default invoiceReducer;
