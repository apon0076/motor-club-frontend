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
axios.interceptors.response.use((response) => {
  console.log("response", response);
  return response;
});

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
