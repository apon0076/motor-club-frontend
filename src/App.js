import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/AddUser/UserList";
import DashboardIndex from "./components/Dashboard/Index";
import InventoryList from "./components/Inventory/Index";
import CreateInvoice from "./components/Invoice/CreateInvoice";
import InvoiceIndex from "./components/Invoice/Index";
import Invoice from "./components/Invoice/Invoice";
import Navbar from "./components/Layouts/Navbar";
import Sidebar from "./components/Layouts/Sidebar";
import SidebarToggle from "./components/Layouts/SidebarToggle";
import LoginIndex from "./components/LoginPage/Index";
import RegIndex from "./components/Registration/Index";
import SalesIndex from "./components/Sales/Index";
import AddSalesReport from "./components/SalesReport/AddSalesReport";
import SalesReport from "./components/SalesReport/Index";
import ViewSalesReport from "./components/SalesReport/ViewSalesReport";
import CustomerProfile from "./components/SearchByCustomer/CustomerProfile";
import SearchByCustomerIndex from "./components/SearchByCustomer/Index";
import SearchByRegIndex from "./components/SearchByReg/Index";
import SearchByVehicleModelIndex from "./components/SearchByVehicleModel/Index";
import VehicleProfile from "./components/SearchByVehicleModel/VehicleProfile";

function App({ user }) {
  const location = useLocation();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <div style={{ height: "10vh" }}>
        {location.pathname === "/user-login" ? null : (
          <Navbar
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
          />
        )}
      </div>
      {location.pathname === "/user-login" ? null : sidebarToggle ? (
        <SidebarToggle
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
        />
      ) : null}
      <div className="flex">
        {location.pathname === "/user-login" ? null : (
          <div className="w-2/12 sidebarSection">
            <Sidebar />
          </div>
        )}
        <div
          className={`${
            location.pathname === "/user-login" ? `w-full` : `w-10/12 py-6`
          } px-6 bodySection`}
        >
          <Switch>
            <Route path="/user-login" component={LoginIndex} />
            <Route
              exact
              path="/"
              render={() =>
                user?.token ? <DashboardIndex /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/registration"
              render={() =>
                user?.token ? <RegIndex /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/invoice"
              render={() =>
                user?.token ? <InvoiceIndex /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/create-invoice"
              render={() =>
                user?.token ? <CreateInvoice /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/view-invoice/:id"
              render={() =>
                user?.token ? <Invoice /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/search-by-customer"
              render={() =>
                user?.token ? (
                  <SearchByCustomerIndex />
                ) : (
                  <Redirect to="/user-login" />
                )
              }
            />
            <Route
              exact
              path="/customer-profile/:id"
              render={() =>
                user?.token ? (
                  <CustomerProfile />
                ) : (
                  <Redirect to="/user-login" />
                )
              }
            />
            <Route
              exact
              path="/search-by-vehicle-model"
              render={() =>
                user?.token ? (
                  <SearchByVehicleModelIndex />
                ) : (
                  <Redirect to="/user-login" />
                )
              }
            />
            <Route
              exact
              path="/vehicle-profile"
              render={() =>
                user?.token ? <VehicleProfile /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/search-by-reg"
              render={() =>
                user?.token ? (
                  <SearchByRegIndex />
                ) : (
                  <Redirect to="/user-login" />
                )
              }
            />
            <Route
              exact
              path="/sales"
              render={() =>
                user?.token ? <SalesIndex /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/add-user"
              render={() =>
                user?.token ? <AddUser /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/inventory-list"
              render={() =>
                user?.token ? <InventoryList /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/sales-report"
              render={() =>
                user?.token ? <SalesReport /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/add-sales-report"
              render={() =>
                user?.token ? <AddSalesReport /> : <Redirect to="/user-login" />
              }
            />
            <Route
              exact
              path="/view-sales-report"
              render={() =>
                user?.token ? (
                  <ViewSalesReport />
                ) : (
                  <Redirect to="/user-login" />
                )
              }
            />
            <Route
              exact
              path="/user-list"
              render={() =>
                user?.token ? <UserList /> : <Redirect to="/user-login" />
              }
            />
          </Switch>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, withRouter)(App);
