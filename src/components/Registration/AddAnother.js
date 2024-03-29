import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function AddAnother({ setOtherData, otherData, addNewBrand }) {
  const [errors, setErrors] = useState({});
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    reset();
  };
  const onSave = () => {
    if (
      otherData.brand &&
      otherData.series &&
      otherData.model &&
      otherData.model_year &&
      otherData.reg_no
    ) {      
    } else {
      setErrors({ ...otherData });
    }
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label>Vehicle Brand</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-8/12"
              type="text"
              {...register("brand", { required: true })}
              onChange={(e) => {
                setOtherData({ ...otherData, brand: e.target.value });
              }}
            />
            {errors.brand === "" && (
              <p className="text-xs text-red-500">Vehicle Brand is required</p>
            )}
          </div>
          <div>
            <label>Vehicle Series</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-8/12"
              type="text"
              {...register("series", { required: true })}
              onChange={(e) =>
                setOtherData({ ...otherData, series: e.target.value })
              }
            />
            {errors.series === "" && (
              <p className="text-xs text-red-500">Vehicle Series is required</p>
            )}
          </div>

          <div>
            <label>Vehicle Model</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-8/12"
              type="text"
              {...register("model", { required: true })}
              onChange={(e) =>
                setOtherData({ ...otherData, model: e.target.value })
              }
            />
            {errors.model === "" && (
              <p className="text-xs text-red-500">Vehicle Model is required</p>
            )}
          </div>

          <div>
            <label>Vehicle Model Year</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-8/12"
              {...register("model_year", { required: true })}
              type="text"
              onChange={(e) =>
                setOtherData({ ...otherData, model_year: e.target.value })
              }
            />
            {errors.model_year === "" && (
              <p className="text-xs text-red-500">
                Vehicle Model Year is required
              </p>
            )}
          </div>

          <div>
            <label>Vehicle Registration No</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-8/12"
              type="text"
              {...register("reg_no", { required: true })}
              onChange={(e) =>
                setOtherData({ ...otherData, registration_no: e.target.value })
              }
            />
            {errors.reg_no === "" && (
              <p className="text-xs text-red-500">
                Vehicle Registration is required
              </p>
            )}
          </div>

          <div>
            <label>VIN No</label>
            <br />
            <input
              className="border border-black outline-none px-2 py-1 w-8/12"
              type="text"
              {...register("vin", { required: true })}
              onChange={(e) =>
                setOtherData({ ...otherData, vin_number: e.target.value })
              }
            />
            {errors.reg_no === "" && (
              <p className="text-xs text-red-500">
                VIN No. is required
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave();
              addNewBrand(otherData);
              toast.success("New Vehicle Added")
            }}
            className="bg-red-800 text-white py-2 px-10 transition-all ease-in-out hover:bg-red-900 mt-10"
          >
            Add New Vehicle
          </button>
          <ToastContainer/>
        </div>
      </form>
    </div>
  );
}
