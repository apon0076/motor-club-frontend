import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import AppointmentsList from "./AppointmentsList";
import { Modal } from "react-responsive-modal";
import AddAppointments from "./AddAppointments";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

const Index = () => {
  const [vehicleId, setVehicleId] = useState("");
  const [filteredDate, setFilteredDate] = useState("");
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const history = useHistory();
  const location = useLocation();

  console.log("appointmentData", appointmentData);
  // Push Query Params
  useEffect(() => {
    history.push(`/appointments?date=&car_id=&page=1`);
  }, []);

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const date = getQueryParams.get("date");
  const car_id = getQueryParams.get("car_id");
  const page = getQueryParams.get("page");

  // API Call for Appointment List
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/appointments?date=${date}&car_id=${car_id}&page=${page}`
        );
        setAppointmentData(response);
      } catch (error) {
        if (error) {
          alert("Server Error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [date, car_id, page]);

  // Handle Open Add Appointments Modal
  const onOpenAppointmentsModal = () => {
    setAppointmentModal(true);
  };

  // Handle Close Add Appointments Modal
  const onCloseAppointmentsModal = () => {
    setAppointmentModal(false);
  };

  //Handle Pagination
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    history.push(
      `/appointments?date=${filteredDate}&car_id=${vehicleId}&page=${pageNumber}`
    );
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-800 text-white py-1 border border-red-800 ml-5 px-4 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center"
          onClick={() => onOpenAppointmentsModal()}
        >
          <IoAddCircleSharp size="1.3rem" className="mr-1" />
          Add Appointments
        </button>

        <div className="flex items-center">
          <div className="relative">
            <input
              className="border border-gray-500 px-8 py-1 rounded-lg"
              type="text"
              placeholder="Vehicle Reg"
              onChange={(e) => setVehicleId(e.target.value)}
            />
            <FaSearch className="absolute top-2 left-2" />
          </div>

          <input
            className="border border-gray-500 px-8 py-1 rounded-lg ml-5"
            type="date"
            onChange={(e) => setFilteredDate(e.target.value)}
          />

          <button
            className="bg-red-800 text-white py-1 border border-red-800 ml-5 px-4 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center"
            onClick={() =>
              // history.push(`/search-by-customer?search=${searchCustomer}&page=1`)
              history.push(
                `/appointments?date=${filteredDate}&car_id=${vehicleId}&page=1`
              )
            }
          >
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>
      <AppointmentsList
        isLoading={isLoading}
        appointmentData={appointmentData}
        handlePagination={handlePagination}
      />
      <Modal open={appointmentModal} onClose={onCloseAppointmentsModal} center>
        <AddAppointments />
      </Modal>
    </>
  );
};

export default Index;
