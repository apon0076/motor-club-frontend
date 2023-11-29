import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER_RESET } from "../../store/User/userActionTypes";
import { updateUser } from "../../store/User/userActions";

const EditUser = ({ singleUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  // Get Response After Post
  const { isLoading, updateSingleUser, error } = useSelector(
    (state) => state.updateUser
  );

  // Form Submit
  const handleUpdate = () => {
    // Make JSON to check
    let dataToCheck = {
      name: singleUser.data.name === name || name === "" ? "" : name,
      email: singleUser.data.email === email || email === "" ? "" : email,
      role: singleUser.data.role === role || role === "" ? "" : role,
      password:
        singleUser.data.password === password || password === ""
          ? ""
          : password,
      phone: singleUser.data.phone === phone || phone === "" ? "" : phone,
      address:
        singleUser.data.address === address || address === "" ? "" : address,
    };

    // Make Data to Post
    let dataToSend = {};
    for (const key in dataToCheck) {
      if (
        dataToCheck[key] !== undefined &&
        dataToCheck[key] !== null &&
        dataToCheck[key] !== ""
      ) {
        dataToSend[key] = dataToCheck[key];
      }
    }
    if (Object.keys(dataToSend).length !== 0) {
      if (dataToSend.password) {
        if (dataToSend.password.length > 7) {
          dispatch(updateUser(dataToSend, singleUser.data.id));
        } else {
          alert("Password Minimum 8 Character");
        }
      } else {
        dispatch(updateUser(dataToSend, singleUser.data.id));
      }
    } else {
      alert("No data to update");
    }
  };

  // Logic After API Response
  useEffect(() => {
    if (error !== null && error !== undefined) {
      alert("Something Went Wrong");
      dispatch({ type: UPDATE_USER_RESET });
    } else {
      if (updateSingleUser.status === 200) {
        alert("Data has been Updated");
        dispatch({ type: UPDATE_USER_RESET });
      }
    }
  }, [error, updateSingleUser]);

  return (
    <div className=" p-5 m-5 rounded-lg bg-gray-100 shadow-lg">
      <div className="flex flex-wrap align-center justify-center w-full gap-5">
        <div className="w-full md:w-5/12">
          <label className="font-semibold">Name</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-full"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            defaultValue={singleUser.data.name}
          />
        </div>

        <div className="w-full md:w-5/12">
          <label className="font-semibold">Email</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-full"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            defaultValue={singleUser.data.email}
          />
        </div>

        <div className="w-full md:w-5/12">
          <label className="font-semibold">Phone No.</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-full"
            placeholder="Phone No."
            type="text"
            defaultValue={singleUser.data.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="w-full md:w-5/12">
          <label className="font-semibold">Role</label>
          <br />
          <select
            className="border border-black outline-none px-2 py-1 w-full"
            defaultValue={singleUser.data.role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Super Admin</option>
            <option value="user">General User</option>
          </select>
        </div>

        <div className="add-user-text-area-width">
          <label className="font-semibold">Type New Password</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-full"
            placeholder="Update Password if You Need."
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="add-user-text-area-width">
          <label className="font-semibold">Address</label>
          <br />
          <textarea
            className="border border-black outline-none px-2 py-1 w-full"
            rows="3"
            cols="50"
            placeholder="Please Enter Address"
            defaultValue={singleUser.data.address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full md:w-5/12">
          {!isLoading ? (
            <button
              onClick={() => handleUpdate()}
              className="w-full rounded-md bg-red-800 text-white py-2 cursor-pointer transition-all ease-in-out hover:bg-red-900"
            >
              Update
            </button>
          ) : (
            <button
              disabled
              className="w-full rounded-md bg-red-800 text-white py-2 cursor-pointer flex justify-center items-center opacity-60"
            >
              <div className="w-5 h-5 border-4 border-teal-600 rounded-full loader mr-2"></div>
              Please Wait...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditUser;
