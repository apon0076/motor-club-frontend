import {
  CUSTOMER_ID,
  FETCH_VEHICLE_LIST,
  SEARCH_VEHICLE_MODEL,
  VEHICLE_DETAILS,
  VEHICLE_DETAILS_ID,
  VEHICLE_LIST_PAGINATION,
} from "./vehicleModelActionTypes";

const initialState = {
  isLoading: false,
  car: [],
  searchVehicle: [],
  vehicleDetails: [],
  vehicleDetailsId: {},
  customerId: {},
};

const vehicleModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLE_LIST:
      return {
        ...state,
        car: action.payload,
      };
    case VEHICLE_LIST_PAGINATION:
      return {
        ...state,
        car: action.payload,
      };
    case SEARCH_VEHICLE_MODEL:
      return {
        ...state,
        car: action.payload,
      };
    case VEHICLE_DETAILS:
      return {
        ...state,
        vehicleDetails: action.payload,
      };
    case VEHICLE_DETAILS_ID:
      return {
        ...state,
        vehicleDetailsId: action.payload,
      };
    case CUSTOMER_ID:
      return {
        ...state,
        customerId: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleModelReducer;
