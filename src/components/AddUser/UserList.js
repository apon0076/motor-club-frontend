import React from "react";
import { getSingleUser, usersList } from "../../store/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import { useLocation, useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-responsive-modal";
import EditUser from "./EditUser";

const UserList = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [userDeleteModalOpen, setUserDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // Push Query Params
  useEffect(() => {
    history.push(`/user-list?page=1`);
  }, []);

  //Handle Pagination
  const handlePagination = (e) => {
    const pageNumber = Number(e.target.getAttribute("page_number"));
    history.push(`/user-list?page=${pageNumber}`);
  };

  // Get Query Params
  const getQueryParams = new URLSearchParams(location.search);

  // Accessing specific query parameters
  const page = getQueryParams.get("page");

  // API Call for User List
  useEffect(() => {
    dispatch(usersList(page !== null ? page : ""));
  }, [dispatch, page]);

  // Get Users Date from Reducer
  const { isLoading, userList, singleUser } = useSelector(
    (state) => state.user
  );

  //Edit User Modal Open & Close Functions
  const onOpenUserModal = (id) => {
    dispatch(getSingleUser(id));
    setUserModalOpen(true);
  };
  const onCloseUserModal = () => setUserModalOpen(false);

  //Delete User Modal Open & Close Functions
  const onOpenUserDeleteModal = () => setUserDeleteModalOpen(true);
  const onCloseUserDeleteModal = () => setUserDeleteModalOpen(false);

  return (
    <>
      <div className="mt-5 border border-gray-400 rounded-md p-5">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <table className="common__table mt-5">
              <thead>
                <tr className="border-b">
                  <th>User Id</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userList?.data?.data?.map((data, index) => (
                  <tr key={index} className="border-b">
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      {Number(data.role) === 0 ? "Super Admin" : "General User"}
                    </td>
                    <td>
                      <button
                        className="text-white p-2  bg-green-700 transition-all ease-in-out hover:bg-green-900"
                        onClick={() => {
                          onOpenUserModal(data.id);
                        }}
                      >
                        <FaEdit size="1.1rem" />
                      </button>
                      <button
                        className="text-white p-2  bg-red-700 transition-all ease-in-out hover:bg-red-900"
                        onClick={() => onOpenUserDeleteModal()}
                      >
                        <FaTrash size="1.1rem" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              totalPage={userList?.data?.last_page}
              pageNumber={userList?.data?.current_page}
              pageLinks={userList?.data?.links}
              handlePagination={handlePagination}
            />
          </>
        )}
      </div>
      <Modal open={userModalOpen} onClose={onCloseUserModal} center>
        {isLoading ? (
          <Loader />
        ) : (
          <EditUser
            onCloseUserModal={onCloseUserModal}
            singleUser={singleUser}
          />
        )}
      </Modal>

      <Modal open={userDeleteModalOpen} onClose={onCloseUserDeleteModal} center>
        <p>delete</p>
      </Modal>
    </>
  );
};

export default UserList;
