import React from "react";
import {
  FaCarSide,
  FaFileInvoiceDollar,
  FaPlusSquare,
  FaSignOutAlt,
  FaUsers,
  FaWindowMaximize,
} from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogOut } from "../../store/User/userActions";
import { MdInventory } from "react-icons/md";

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
        to="/add-user"
      >
        <FaUsers className="sideBar--icons" />
        Add User
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
        to="/invoice?search=&page=1"
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

      <button className="sideBar w-full" onClick={() => dispatch(userLogOut())}>
        <FaSignOutAlt className="sideBar--icons" />
        Logout
      </button>
    </div>
  );
}
