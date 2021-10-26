import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAddNewBrand } from "../../store/Customer/customerAction";
import {
  fetchOldRegistration,
  fetchRegistration,
} from "../../store/Registration/registrationAction";
import Sidebar from "../Layouts/Sidebar";
import AddAnother from "./AddAnother";

export default function Index() {
  const history = useHistory();
  const [address, setAddress] = useState({
    name: "",
    address: "",
    email: "",
  });
  const [otherData, setOtherData] = useState({
    brand: "",
    series: "",
    model: "",
    model_year: "",
    registration_no: "",
  });

  const data = useSelector((state) => state.registration.oldReg);
  console.log(data);
  const [addAnother, setAddAnother] = useState(false);
  const dispatch = useDispatch();
  const [work, setWork] = useState("");
  const [complain, setComplain] = useState("");
  const [vehicle_option, setvehicle_option] = useState("");

  console.log("vehicle_option", vehicle_option);
  // const editorRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (
      !data?.customer?.name &&
      !address.name &&
      !data?.customer?.address &&
      !data?.customer?.email &&
      !address.email &&
      !address.address
    ) {
      toast.error("Please fill all the required fields");
    } else {
      dispatch(
        fetchRegistration({
          ...data,
          ...otherData,
          old_customer: "none",
          old_car: "none",
          complain,
          work_to_do: work,
          vehicle_option,
        })
      );
      setTimeout(() => {
        history.push("/");
      }, 1500);
    }
  };

  const addNewBrand = (newData) => {
    dispatch(
      fetchAddNewBrand({
        ...newData,
        customer_id: data?.customer?.id,
        name: data?.customer?.name,
        phone: data?.customer?.phone,
      })
    );
  };
  useEffect(() => {
    if (data?.vachele?.length) {
      setvehicle_option(data?.vachele[0]?.brand);
    }
  }, [data?.vachele?.length]);
  console.log(data);
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 px-6 py-20 mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Customer Information</p>
          <div className="border border-black rounded-md p-4">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label>Phone Number</label>
                <br />
                <input
                  className="border border-black outline-none px-2 py-1 w-8/12"
                  type="number"
                  {...register("phone", { required: true })}
                  onChange={(e) =>
                    dispatch(fetchOldRegistration(e.target.value))
                  }
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 ">
                    Phone number is required
                  </p>
                )}
              </div>
              <div>
                <label>Customer Name</label>
                <br />
                <input
                  className="border border-black outline-none px-2 py-1 w-8/12"
                  type="text"
                  defaultValue={
                    data?.customer?.name ? data?.customer?.name : ""
                  }
                  {...register("name")}
                  onChange={(e) =>
                    setAddress({ ...address, name: e.target.value })
                  }
                />
                {!data?.customer?.name && !address.name && (
                  <p className="text-xs text-red-500 ">
                    Customer Name is required
                  </p>
                )}
              </div>
              <div>
                <label>Address</label>
                <br />
                <input
                  className="border border-black outline-none px-2 py-1 w-8/12"
                  type="text"
                  defaultValue={
                    data?.customer?.address ? data?.customer?.address : ""
                  }
                  {...register("address")}
                  onChange={(e) =>
                    setAddress({ ...address, address: e.target.value })
                  }
                />
                {!data?.customer?.address && !address.address && (
                  <p className="text-xs text-red-500">Address is required</p>
                )}
              </div>

              <div>
                <label>Email Address</label>
                <br />
                <input
                  className="border border-black outline-none px-2 py-1 w-8/12"
                  type="text"
                  defaultValue={
                    data?.customer?.email ? data?.customer?.email : ""
                  }
                  {...register("email")}
                  onChange={(e) =>
                    setAddress({ ...address, email: e.target.value })
                  }
                />
                {!data?.customer?.email && !address.email && (
                  <p className="text-xs text-red-500">Address is required</p>
                )}
              </div>
            </div>
          </div>
          <br />
          <br />
          <p>Vehicle Information</p>
          <div className="border border-black rounded-md p-4">
            <div className="flex items-center">
              <select
                className="border border-black outline-none px-2 py-1 w-4/12 mr-5"
                onClick={(e) => setvehicle_option(e.target.value)}
                {...register("vehicle_option")}
              >
                {data?.vachele?.map((data) => (
                  <option value={data.brand}>
                    {data.brand} {data.model} {data.registration_no}{" "}
                  </option>
                ))}
              </select>

              <div
                className="bg-red-800 text-white px-2 py-1 transition-all ease-in-out hover:bg-red-900 cursor-pointer"
                onClick={() => setAddAnother(!addAnother)}
              >
                Add another
              </div>
            </div>
            {addAnother ? (
              <AddAnother
                setOtherData={setOtherData}
                otherData={otherData}
                addNewBrand={addNewBrand}
              />
            ) : null}
          </div>
          <br />
          <br />
          <p>Complain</p>
          <Editor
            apiKey="541du0ed3xh41c92080xvmfz6ori4aibqvs4g9vvs8onvjmn"
            // onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=" "
            init={{
              height: 250,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(text) => setComplain(text)}
          />
          <br />
          <br />
          <p>Work to Do</p>
          <Editor
            apiKey="541du0ed3xh41c92080xvmfz6ori4aibqvs4g9vvs8onvjmn"
            // onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=" "
            onEditorChange={(text) => setWork(text)}
            init={{
              height: 250,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <div className="flex items-center justify-center">
            <input
              className="bg-red-800 text-white py-2 px-10 transition-all ease-in-out hover:bg-red-900 mt-10 cursor-pointer"
              type="submit"
              value="Save"
              // onClick={handleRoute}
            />
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
