import {
  FETCH_VEHICLE_LIST_REQUEST,
  FETCH_VEHICLE_LIST_SUCCESS,
  FETCH_VEHICLE_LIST_ERROR,
  FETCH_VEHICLE_LIST_RESET,
} from "./vehicleRegNoActionTypes";

const initialState = {
  isLoading: false,
  vehicleList: [],
  error: null,
};

const vehicleRegReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLE_LIST_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_VEHICLE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        vehicleList: action.payload,
      };
    case FETCH_VEHICLE_LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_VEHICLE_LIST_RESET:
      return { vehicleList: [], isLoading: false, error: null };
    default:
      return state;
  }
};

export default vehicleRegReducer;
