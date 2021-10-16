import axios from "axios";
import { OLD_REGISTRATION, REGISTRATION } from "./registrationActionTypes";

function oldRegistartion(data) {
  return {
    type: OLD_REGISTRATION,
    payload: data,
  };
}
function registration(data) {
  return {
    type: REGISTRATION,
    payload: data,
  };
}
export const fetchOldRegistration = (data) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    console.log(user);
    try {
      const res = axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/customer/search`,
          { number: data },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then((res) => dispatch(oldRegistartion(res.data)));
      dispatch(oldRegistartion(res));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchRegistration = (data) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    console.log(user.token);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/customer/registration`,
        data
      );
      dispatch(registration(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
