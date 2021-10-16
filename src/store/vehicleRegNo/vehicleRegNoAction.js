import axios from "axios";
import { 
    VEHICLE_LIST_BY_REG,
    VEHICLE_LIST_PAGINATION,
} from "./vehicleRegNoActionTypes";

function fetchVehicleListByReg (data){
    return{
        type:VEHICLE_LIST_BY_REG,
        payload:data
    }
  }
  function vehiclePagination (data){
    return{
        type:VEHICLE_LIST_PAGINATION,
        payload:data
    }
  }
  
  export function fetchAllVehicleListByReg(search = "") {
    return async (dispatch) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/search-by-registration?search=${search}`,
        );
        dispatch(fetchVehicleListByReg(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
  }
  export function vehicleListPagination(pageNumber) {
    return async (dispatch) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/search-by-registration?${pageNumber})`,
        );
        dispatch(vehiclePagination(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
  }