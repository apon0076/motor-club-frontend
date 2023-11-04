import React from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../store/User/userActions";
import { useDispatch, useSelector } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();

  // Get Response After Post
  const {isLoading,success,addUsers, error} = useSelector((state) => state.addUser);

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
      data.password === data.retypePassword
    ) {
      let dataToSend = {
        name: data.name,
        email: data.email,
        role: data.role,
        password: data.password,
      };
      dispatch(addUser(dataToSend));
    } else {
      if (Number.isInteger(Number(data.phone)) === false) {
        alert("number");
      } else {
        alert("pass");
      }
    }
  };
  return (
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
            <p className="text-xs text-red-500">Re-Type Password is required</p>
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
          <input
            className="w-full bg-red-800 text-white py-2 cursor-pointer transition-all ease-in-out hover:bg-red-900"
            value="Register"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default AddUser;
