import React from "react";
import { useState } from "react";
import { fetchOldRegistration } from "../../store/Registration/registrationAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const AddAppointments = ({ setAppointmentModal, setAppointmentAddSuccess }) => {
  const [vehicleId, setVehicleId] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Get Data From Reducer
  const oldReg = useSelector((state) => state.registration.oldReg);

  // Handle Submit
  const handleSubmit = async () => {
    const dataToPost = {
      car_id: vehicleId,
      date: date,
      note: note,
    };
    console.log("dataToPost", dataToPost);
    if (
      dataToPost.car_id !== "" &&
      dataToPost.date !== "" &&
      dataToPost.note !== ""
    ) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/appointments`,
          dataToPost
        );
        setAppointmentModal(false);
        setAppointmentAddSuccess(true);
      } catch (error) {
        console.error(`Error:`, error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("All Field Are Required");
    }
  };
  return (
    <div className="pt-6 pb-4 flex flex-col">
      <input
        className="w-96 border border-black rounded p-1"
        type="text"
        placeholder="Phone Number"
        onChange={(e) => dispatch(fetchOldRegistration(e.target.value))}
      />
      <br />
      <select
        className="w-96 border border-black rounded p-1"
        onClick={(e) => setVehicleId(e.target.value)}
      >
        <option>---Select a Vehicle---</option>
        {oldReg?.vachele?.map((data) => (
          <option value={data?.registration_no}>
            {data?.brand} {data.model} {data.registration_no}
          </option>
        ))}
      </select>
      <br />
      <input
        className="w-96 border border-black rounded p-1"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <textarea
        className="w-96 border border-black rounded p-1"
        rows={3}
        placeholder="Add a Note"
        onChange={(e) => setNote(e.target.value)}
      />
      <br />
      <button
        className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900 rounded"
        onClick={() => handleSubmit()}
      >
        Add
      </button>
    </div>
  );
};

export default AddAppointments;
