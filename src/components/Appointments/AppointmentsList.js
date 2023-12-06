import React from "react";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from "react-responsive-modal";
import WarningModal from "../WarningModal/WarningModal";
import { useState } from "react";
import axios from "axios";

const AppointmentsList = ({ isLoading, appointmentData, handlePagination, setAppointmentAddSuccess }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isDelLoading, setIsDelLoading] = useState(false);

  //Delete Modal Open Functions
  const onOpenDeleteModal = (id) => {
    setDeleteModalOpen(true);
    setAppointmentAddSuccess(false);
    setDeleteId(id);
  };

  // Handle Close Delete Modal
  const onCloseDeleteModal = () => setDeleteModalOpen(false);
   // Handle User Delete
   const handleDelete = async (id) => {
    try {
      setIsDelLoading(true);
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/appointments/${id}`
      );
      setDeleteModalOpen(false);
      setAppointmentAddSuccess(true)
    } catch (error) {
      console.error(`Error deleting resource with id ${id}:`, error);
    } finally {
      setIsDelLoading(false);
    }
   }
 
  return (
    <>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <table className="common__table">
              <thead>
                <tr>
                  <th>Vehicle Info</th>
                  <th>Date</th>
                  <th className="w-6/12">Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointmentData?.data?.data.map((data, index) => (
                  <tr key={index}>
                    <td>{data.car_id}</td>
                    <td>{data.date}</td>
                    <td className="h-1">{data.note}</td>
                    <td>
                      <button className="text-white p-2 bg-yellow-700 transition-all ease-in-out hover:bg-yellow-800 mr-1 rounded">
                        <FaRegEdit />
                      </button>
                      <button className="text-white p-2 bg-red-800 transition-all ease-in-out hover:bg-red-900 rounded"
                      onClick={()=>onOpenDeleteModal(data.id)}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              totalPage={appointmentData?.data?.last_page}
              pageNumber={appointmentData?.data?.current_page}
              pageLinks={appointmentData?.data?.links}
              handlePagination={handlePagination}
            />
          </>
        )}
      </div>
      <Modal open={deleteModalOpen} onClose={onCloseDeleteModal} center>
        <WarningModal
          id={deleteId}
          loading={isDelLoading}
          handleClick={handleDelete}
          modalControlState={setDeleteModalOpen}
        />
      </Modal>
    </>
  );
};

export default AppointmentsList;
