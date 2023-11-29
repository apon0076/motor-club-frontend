import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { USER_REGISTER_RESET } from "../../store/User/userActionTypes";
import { addUser, updateUser } from "../../store/User/userActions";

const EditUser = ({ singleUser }) => {
  const dispatch = useDispatch();
  // Destructure useForm of react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form Submit
  const onSubmit = (data) => {
    // let dataToSend = {
    //   name: data.name,
    //   email: data.email,
    //   role: data.role,
    //   password: data.password,
    //   phone: data.phone,
    //   address: data.address,
    // };
    // console.log("data", dataToSend);
    // dispatch(updateUser(dataToSend, singleUser.data.id));
     // Create an object dynamically with only the fields that have values
     let dataToSend = {};

     for (const key in data) {
      if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
        dataToSend[key] = data[key];
      }
    }
    console.log("data", dataToSend);
  };
  return (
    <div className=" p-5 m-5 rounded-lg bg-gray-100 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap align-center justify-center w-full gap-5">
          <div className="w-full md:w-5/12">
            <label className="font-semibold">
              Name<sup className="text-red-500">*</sup>
            </label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              placeholder="Name"
              type="text"
              {...register("name", { required: true })}
              defaultValue={singleUser.data.name}
            />
            {errors.name && (
              <p className="text-xs text-red-500">Name is required</p>
            )}
          </div>

          <div className="w-full md:w-5/12">
            <label className="font-semibold">
              Email<sup className="text-red-500">*</sup>
            </label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
              defaultValue={singleUser.data.email}
            />
            {errors.email && (
              <p className="text-xs text-red-500">Email is required</p>
            )}
          </div>

          <div className="w-full md:w-5/12">
            <label className="font-semibold">
              Phone No.<sup className="text-red-500">*</sup>
            </label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              placeholder="Phone No."
              type="text"
              {...register("phone", { required: true })}
              defaultValue={singleUser.data.phone}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">Phone No. is required</p>
            )}
          </div>

          <div className="w-full md:w-5/12">
            <label className="font-semibold">
              Role<sup className="text-red-500">*</sup>
            </label>
            <br />
            <select
              className="border border-black outline-none px-2 py-1 w-full"
              {...register("role")}
              defaultValue={singleUser.data.role}
            >
              <option value="0">Super Admin</option>
              <option value="1">General User</option>
            </select>
            {errors.role && (
              <p className="text-xs text-red-500">Role is required</p>
            )}
          </div>

          <div className="add-user-text-area-width">
            <label className="font-semibold">Type New Password</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-full"
              placeholder="Update Password if You Need."
              type="text"
              {...register("password")}
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
              {...register("address", { required: false })}
              defaultValue={singleUser.data.address}
            ></textarea>
          </div>

          <div className="w-full md:w-5/12">
            <input
              className="w-full rounded-md bg-red-800 text-white py-2 cursor-pointer transition-all ease-in-out hover:bg-red-900"
              value="Update"
              type="submit"
            />
          </div>
          {/* <div className="w-full md:w-5/12">
            {isLoading ? (
              <button
                disabled
                className="flex align-center justify-center w-full bg-red-800 text-white py-2 cursor-pointer opacity-60"
              >
                <div className="w-5 h-5 border-4 border-teal-600 rounded-full loader mr-2"></div>
                <p>Please Wait...</p>
              </button>
            ) : (
              <input
                className="w-full rounded-md bg-red-800 text-white py-2 cursor-pointer transition-all ease-in-out hover:bg-red-900"
                value="Register"
                type="submit"
              />
            )}
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default EditUser;
