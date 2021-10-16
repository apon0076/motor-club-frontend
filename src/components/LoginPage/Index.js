import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { userLogin } from "../../store/User/userActions";
import Logo from "./../../assets/logo.jpg";

export default function Index() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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

          <div className="login__btn--section mt-10">
            <input
              className="login__btn cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
