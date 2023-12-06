import React from "react";
import {
  FaCalendarAlt,
  FaCarSide,
  FaFileInvoiceDollar,
  FaPlusSquare,
  FaSignOutAlt,
  FaUsers,
  FaWindowMaximize,
} from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { MdInventory } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogOut } from "../../store/User/userActions";
import axios from "axios";

export default function Sidebar() {
  const dispatch = useDispatch();
  const loggedInUser = JSON.parse(
    window.localStorage.getItem("loggedInProfile")
  );

  // Check Active
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/logout`
      );
      dispatch(userLogOut());
    } catch (error) {
      console.error(`Error:`, error);
    } finally {
      console.error(`Done`);
    }
  };
  return (
    <div className="sidebar__section">
      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/"
        isActive={checkActive}
      >
        <RiDashboardFill className="sideBar--icons" />
        Dashboard
      </NavLink>

      {loggedInUser?.role === "admin" ? (
        <NavLink
          className="sideBar"
          activeClassName="sideBar--active"
          to="/add-user"
        >
          <FaUsers className="sideBar--icons" />
          Add User
        </NavLink>
      ) : null}

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/registration"
      >
        <FaPlusSquare className="sideBar--icons" />
        Registration
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/job-card"
      >
        <BiSolidCreditCardFront className="sideBar--icons" />
        Job Card
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/invoice"
      >
        <FaFileInvoiceDollar className="sideBar--icons" />
        Invoice
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/search-by-customer"
      >
        <FaUsers className="sideBar--icons" />
        Search by Customer
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/search-by-vehicle-model"
      >
        <FaCarSide className="sideBar--icons" />
        Search by Vehicle Model
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/search-by-reg"
      >
        <FaWindowMaximize className="sideBar--icons" />
        Search by Vehicle Reg
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/appointments"
      >
        <FaCalendarAlt className="sideBar--icons" />
        Appointments
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/sales"
      >
        <IoLogoUsd className="sideBar--icons" />
        Sales
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/sales-report"
      >
        <FaFileInvoiceDollar className="sideBar--icons" />
        Sales Report
      </NavLink>

      <NavLink
        className="sideBar"
        activeClassName="sideBar--active"
        to="/inventory-list"
      >
        <MdInventory className="sideBar--icons" />
        Inventory
      </NavLink>

      <button className="sideBar w-full" onClick={() => handleLogout()}>
        <FaSignOutAlt className="sideBar--icons" />
        Logout
      </button>
    </div>
  );
}
