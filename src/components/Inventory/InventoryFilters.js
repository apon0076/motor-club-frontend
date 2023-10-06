import React from "react";
import { FaSearch } from "react-icons/fa";

const InventoryFilters = () => {
  return (
    <>
      <div className="mb-5">
        <label className=" font-semibold text-base">Search by Name :</label>
        <div className="relative">
          <input
            className="border border-black px-8 py-1 outline-none w-full rounded-xl"
            type="text"
            placeholder="Search Product"
            //   onChange={(e) => handleSearchCustomer(e)}
          />
          <FaSearch className="absolute top-2 left-2" />
        </div>
      </div>
      <div className="mb-5">
        <label className=" font-semibold text-base">Search by Category :</label>
        <p> Oil</p>
        <p>-Engine Oil</p>
        <p>--10w40</p>
      </div>
      <div className="mb-5">
        <label className=" font-semibold text-base">Search by Stock :</label>
        <br />
        <fieldset>
          <div className="flex align-center">
            <input type="radio" id="10" name='stock'/>
            <label className="ml-2" for="10">Less Than 10</label>
          </div>

          <div className="flex align-center">
            <input type="radio" id="20" name='stock'/>
            <label className="ml-2" for="20">Less Than 20</label>
          </div>

          <div className="flex align-center">
            <input type="radio" id="50" name='stock'/>
            <label className="ml-2" for="50">Less Than 50</label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default InventoryFilters;
