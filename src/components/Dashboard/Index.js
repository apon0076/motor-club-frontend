import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCarSide, FaUsers } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { Link } from "react-router-dom";
import Sidebar from "../Layouts/Sidebar";
import SalesSummary from "./SalesSummary";

export default function Index() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/dashboard`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="flex">
      <div className="w-2/12 sidebarSection">
        <Sidebar />
      </div>
      <div className="w-10/12 px-6 py-20 bodySection">
        <div className="grid grid-cols-3 gap-10 mt-10">
          <Link to="/search-by-customer">
            <div className="border border-black rounded-lg dashboard__dashboard--card flex items-center cursor-pointer">
              <div className="dashboard__dashboardCard--totalSales flex items-center justify-center rounded-full">
                <FaUsers size="1.5rem" />
              </div>
              <div className="ml-5">
                <p className="font-bold dashboard__card--header">Customers</p>
                <p className="font-bold dashboard__card--subHeader">
                  {data?.totalCustomer}
                </p>
              </div>
            </div>
          </Link>
          <Link to="/sales">
            <div className="border border-black rounded-lg dashboard__dashboard--card flex items-center cursor-pointer">
              <div className="dashboard__dashboardCard--totalOrders flex items-center justify-center rounded-full">
                <IoLogoUsd size="1.5rem" />
              </div>

              <div className="ml-5">
                <p className="font-bold dashboard__card--header">Total Sales</p>
                <p className="font-bold dashboard__card--subHeader">
                  {data?.total_sales?.final_price}
                </p>
              </div>
            </div>
          </Link>
          <Link to="/search-by-reg">
            <div className="border border-black rounded-lg dashboard__dashboard--card flex items-center cursor-pointer">
              <div className="dashboard__dashboardCard--totalProducts flex items-center justify-center rounded-full">
                <FaCarSide size="1.5rem" />
              </div>
              <div className="ml-5">
                <p className="font-bold dashboard__card--header">
                  Total Vehicles
                </p>
                <p className="font-bold dashboard__card--subHeader">
                  {data?.totalCar}
                </p>
              </div>
            </div>
          </Link>
        </div>

        <SalesSummary />
      </div>
    </div>
  );
}
