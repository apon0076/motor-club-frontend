import { 
    VEHICLE_LIST_BY_REG,
    VEHICLE_LIST_PAGINATION
} from "./vehicleRegNoActionTypes";

  const initialState = {
    isLoading: false,
    vehicleList:[],
  };
  
  const vehicleRegReducer = (state = initialState, action) => {
    switch (action.type) {
        case VEHICLE_LIST_BY_REG:
            return{
                ...state,
                vehicleList:action.payload
            }    
            case VEHICLE_LIST_PAGINATION:
            return{
                ...state,
                vehicleList:action.payload
            }   
      default:
        return state;
    }
  };
  
  export default vehicleRegReducer;