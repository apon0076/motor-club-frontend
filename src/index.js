import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";

// Axios Interceptors Request
axios.interceptors.request.use((request) => {
  var token = localStorage.getItem("authToken");
  request.headers = {
    Authorization: `Bearer ${token}`,
  };
  return request;
});

// Axios Interceptors Response
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if the error status is 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      window.location.href = "/user-login";
    }
    // If it's not a 401 error, just return the error as usual
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
