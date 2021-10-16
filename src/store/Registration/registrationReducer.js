import { OLD_REGISTRATION, REGISTRATION } from "./registrationActionTypes";

const initialState = {
  isLoading: false,
  reg: [],
  oldReg: [],
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OLD_REGISTRATION:
      return {
        ...state,
        isLoading: false,
        oldReg: action.payload,
      };
    case REGISTRATION:
      return {
        ...state,
        isLoading: false,
        reg: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
