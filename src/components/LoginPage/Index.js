import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { userLogin } from "../../store/User/userActions";
import Logo from "./../../assets/logo.jpg";
import { useEffect } from "react";

export default function Index() {
  const user = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(userLogin(data));

    setTimeout(() => {
      const token = window.localStorage.getItem("authToken");
      if (token !== null) {
        history.push("/");
      } else {
        toast.error("Email and password is not matched");
      }
    }, [2000]);
  };
  return (
    <div className="login__page">
      <div className="login__section">
        <div className="login__logo--section">
          <img className="login__logo" src={Logo} alt="logo" />
        </div>
        <br />
        <form className="login__form--area" onSubmit={handleSubmit(onSubmit)}>
          <label className="">Email</label>
          <input
            className="input__form"
            type="email"
            placeholder="Type Your Email"
            {...register("email")}
          />
          <label className="mt-10">Password</label>
          <input
            className="input__form"
            type="password"
            placeholder="********"
            {...register("password")}
          />

          <div className="login__btn--section  mt-10">
            {user.isLoading ? (
              <button
                disabled
                className="flex items-center justify-center login__btn cursor-pointer w-full py-2 opacity-60"
              >
                <div class="w-5 h-5 border-4 border-teal-600 rounded-full loader mr-2"></div>
                <p>Signing...</p>
              </button>
            ) : (
              <input
                className="login__btn cursor-pointer w-full py-2"
                type="submit"
                value="SIGN IN"
              />
            )}
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
