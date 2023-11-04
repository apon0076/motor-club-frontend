import {
  CUSTOMER_ID,
  FETCH_VEHICLE_LIST_ERROR,
  FETCH_VEHICLE_LIST_REQUEST,
  FETCH_VEHICLE_LIST_RESET,
  FETCH_VEHICLE_LIST_SUCCESS,
  VEHICLE_DETAILS,
  VEHICLE_DETAILS_ID
} from "./vehicleModelActionTypes";

const initialState = {
  isLoading: false,
  vehicles: [],
  searchVehicle: [],
  vehicleDetails: [],
  vehicleDetailsId: {},
  customerId: {},
  error: null,
};

const vehicleModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLE_LIST_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_VEHICLE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        vehicles: action.payload,
      };
    case FETCH_VEHICLE_LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_VEHICLE_LIST_RESET:
      return { vehicles: [], isLoading: false, error: null };
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
