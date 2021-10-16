import { 
    FETCH_CUSTOMER_LIST,
    CUSTOMER_LIST_PAGINATION,
    CUSTOMER_PROFILE,
    SERVICE_HISTORY_PAGINATION,
} from "./customerActionTypes";

  const initialState = {
    isLoading: false,
    customer:[],
    customerProfile:[]
  };
  
  const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMER_LIST:
            return{
                ...state,
                customer:action.payload
            }
            case CUSTOMER_LIST_PAGINATION:
                return{
                    ...state,
                    customer:action.payload
            }
            case CUSTOMER_PROFILE:
                return{
                    ...state,
                    customerProfile:action.payload
            }
            case SERVICE_HISTORY_PAGINATION:
                return{
                    ...state,
                    customerProfile:action.payload
            }
            
      default:
        return state;
    }
  };
  
  export default customerReducer;