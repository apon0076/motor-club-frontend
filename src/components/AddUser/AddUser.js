import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { USER_REGISTER_RESET } from "../../store/User/userActionTypes";
import { addUser } from "../../store/User/userActions";

const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Get Response After Post
  const { isLoading, addUsers, error } = useSelector((state) => state.addUser);

  // Destructure useForm of react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form Submit
  const onSubmit = (data) => {
    if (
      Number.isInteger(Number(data.phone)) &&
      data.password === data.retypePassword &&
      data.password.length > 7
    ) {
      let dataToSend = {
        name: data.name,
        email: data.email,
        role: Number(data.role) === 0 ? "admin" : "user",
        password: data.password,
        phone: data.phone,
        address: data.address,
      };
      dispatch(addUser(dataToSend));
    } else {
      if (Number.isInteger(Number(data.phone)) === false) {
        alert("You Must Provide Valid Phone No.");
      } else if (data.password.length < 8) {
        alert("The password must be at least 8 characters");
      } else {
        alert("Password is not matched");
      }
    }
  };

  // Logic After API Response
  useEffect(() => {
    if (error !== null && error !== undefined) {
      alert("The email has already been taken");
      dispatch({ type: USER_REGISTER_RESET });
    } else {
      if (addUsers?.data?.message === "User created successfully") {
        alert(addUsers?.data?.message);
        dispatch({ type: USER_REGISTER_RESET });
        history.push("/user-list");
      }
    }
  }, [error, addUsers]);

  return (
    <>
      <div className="flex justify-end items-center">
        <Link to="/user-list">
          <button className="bg-red-800 border border-red-800 text-white py-1 ml-5 px-10 transition-all ease-in-out rounded-lg hover:bg-red-900 flex items-center">
            <FaEye className="mr-3" size="1.3rem" />
            User List
          </button>
        </Link>
      </div>
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
              >
                <option value="0">Super Admin</option>
                <option value="1">General User</option>
              </select>
              {errors.role && (
                <p className="text-xs text-red-500">Role is required</p>
              )}
            </div>

            <div className="w-full md:w-5/12">
              <label className="font-semibold">
                Password<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-full"
                placeholder="Enter a Password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-xs text-red-500">Password is required</p>
              )}
            </div>

            <div className="w-full md:w-5/12">
              <label className="font-semibold">
                Re-Type Password<sup className="text-red-500">*</sup>
              </label>
              <br />
              <input
                className="border border-black outline-none px-2 py-1 w-full"
                placeholder="Re-Type Password"
                type="password"
                {...register("retypePassword", { required: true })}
              />
              {errors.retypePassword && (
                <p className="text-xs text-red-500">
                  Re-Type Password is required
                </p>
              )}
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
              ></textarea>
            </div>

            <div className="w-full md:w-5/12">
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
