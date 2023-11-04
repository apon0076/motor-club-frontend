import {
  FETCH_INVOICE_LIST_REQUEST,
  FETCH_INVOICE_LIST_SUCCESS,
  FETCH_INVOICE_LIST_ERROR,
  FETCH_INVOICE_LIST_RESET,
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
  error: null,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVOICE_LIST_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_INVOICE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        invoiceList: action.payload,
      };
    case FETCH_INVOICE_LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_INVOICE_LIST_RESET:
      return { invoiceList: [], isLoading: false, error: null };
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
