import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import {
  FaCarSide,
  FaFileInvoiceDollar,
  FaPlusSquare,
  FaSignOutAlt,
  FaUsers,
  FaWindowMaximize,
} from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { userLogOut } from "../../store/User/userActions";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
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
        to="/sales"
      >
        <IoLogoUsd className="sideBar--icons" />
        Sales
      </NavLink>

      <button className="sideBar w-full" onClick={() => dispatch(userLogOut())}>
        <FaSignOutAlt className="sideBar--icons" />
        Logout
      </button>
    </div>
  );
}
