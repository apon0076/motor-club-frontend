import { combineReducers } from "redux";
import customerReducer from "./Customer/customerReducer";
import invoiceReducer from "./Invoice/invoiceReducer";
import registrationReducer from "./Registration/registrationReducer";
import userReducer, { addUserReducer } from "./User/userReducer";
import vehicleModelReducer from "./VehicleModel/vehicleModelReduces";
import salesReducer from "./sales/salesReducer";
import vehicleRegReducer from "./vehicleRegNo/vehicleRegReducer";

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  customer: customerReducer,
  vehicleModel: vehicleModelReducer,
  invoice: invoiceReducer,
  vehicleReg: vehicleRegReducer,
  sales: salesReducer,
  addUser: addUserReducer,
});

export default rootReducer;
