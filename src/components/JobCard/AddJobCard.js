import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { fetchOldRegistration } from "../../store/Registration/registrationAction";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const AddJobCard = () => {
  const [sample, setSample] = useState([
    { id: 1, value: "Apple" },
    { id: 2, value: "Banana" },
    { id: 3, value: "Orange" },
    { id: 4, value: "Pear" },
  ]);
  const [complainList, setComplainList] = useState([{ id: 1, value: "" }]);
  const [workList, setWorkList] = useState([{ id: 1, value: "" }]);
  const [complainSuggestionData, setComplainSuggestionData] = useState("");
  const [reg_no, setReg_no] = useState();
  const [odo, setOdo] = useState();
  const dispatch = useDispatch();

  // Handle Add Complain
  const handleAddComplain = () => {
    setComplainList([
      ...complainList,
      { id: complainList.length + 1, value: "" },
    ]);
  };

  // Handle Remove Complain
  const handleRemoveComplain = (index) => {
    const list = [...complainList];
    list.splice(index, 1);
    setComplainList(list);
  };

  // Handle Add Work List
  const handleAddWorkList = () => {
    setWorkList([...workList, { id: workList.length + 1, value: "" }]);
  };

  // Handle Remove Work List
  const handleRemoveWorkList = (index) => {
    const list = [...workList];
    list.splice(index, 1);
    setWorkList(list);
  };

  // Complain Auto Suggestion On Change
  const handleComplainAutoSuggestionChange = (e) => {
    setComplainSuggestionData(e.target.value);
  };

  // Get Value From Reducer
  const oldReg = useSelector((state) => state.registration.oldReg);

  useEffect(() => {
    if (oldReg?.customer) {
      setReg_no(oldReg?.vachele[0]?.registration_no);
    }
  }, [oldReg?.customer]);

  // Select Value
  const options = sample.map((item) => ({ label: item.value, value: item.id }));
  const isDisabled = false;
  const isSelectLoading = false;
  const isClearable = true;
  const isRtl = false;
  const isSearchable = true;

  // Handle Complain Select Change
  const handleComplainChange = (selectedOption, index) => {
    console.log("Selected Option:", selectedOption);
    console.log("index:", index);
  };

  // Handle Work Select Change
  const handleWorkChange = (selectedOption, index) => {
    console.log("Selected Option:", selectedOption);
    console.log("index:", index);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-5 bg-gray-100 p-10">
        <div>
          <label>Phone No</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-8/12"
            type="text"
            onChange={(e) => dispatch(fetchOldRegistration(e.target.value))}
          />
        </div>
        <div>
          <label>Customer Name</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-8/12"
            type="text"
            defaultValue={oldReg?.customer?.name}
            disabled
          />
        </div>

        <div>
          <label>Vehicle</label>
          <br />
          <select
            className="border border-black outline-none px-2 py-2 w-8/12 mr-5"
            onClick={(e) => setReg_no(e.target.value)}
          >
            {oldReg?.vachele?.map((data) => (
              <option value={data?.registration_no}>
                {data?.brand} {data.model} {data.registration_no}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-8/12"
            type="email"
            defaultValue={
              oldReg?.customer?.email ? oldReg?.customer?.email : ""
            }
            disabled
          />
        </div>

        <div>
          <label>Vehicle Registration No</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-8/12"
            type="text"
            defaultValue={reg_no}
            disabled
          />
        </div>

        <div>
          <label>ODO</label>
          <br />
          <input
            className="border border-black outline-none px-2 py-1 w-8/12"
            type="text"
            onChange={(e) => setOdo(e.target.value)}
          />
        </div>
      </div>

      {/* Left Side */}
      <div className="flex">
        <div className="flex-1 bg-gray-200 p-4">
          <h1 className="text-2xl font-bold mb-4">Complain</h1>
          {complainList.map((field, index) => (
            <div
              key={field.id}
              className="mb-4 flex items-center justify-between"
            >
              <Select
                className="basic-single"
                classNamePrefix="select"
                isDisabled={isDisabled}
                isLoading={isSelectLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="value"
                options={options}
                onChange={(selectedOption) =>
                  handleComplainChange(selectedOption, index)
                }
              />
              <div className="flex">
                {complainList.length - 1 === index && (
                  <button
                    className="ml-2 border border-green-600 bg-green-600 text-white p-2 cursor-pointer rounded transition-all ease-in-out hover:bg-green-700"
                    onClick={() => handleAddComplain()}
                  >
                    <FaPlus />
                  </button>
                )}
                {complainList.length !== 1 && (
                  <button
                    className="ml-2 border border-red-600 bg-red-600 text-white p-2 cursor-pointer rounded transition-all ease-in-out hover:bg-red-700"
                    onClick={() => handleRemoveComplain(index)}
                  >
                    <RiDeleteBin6Fill />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-1 bg-gray-400" />

        {/* Right Side */}
        <div className="flex-1 bg-gray-200 p-4">
          <h1 className="text-2xl font-bold mb-4">Work to do</h1>
          {workList.map((field, index) => (
            <div
              key={field.id}
              className="mb-4 flex items-center justify-between"
            >
              <Select
                className="basic-single"
                classNamePrefix="select"
                isDisabled={isDisabled}
                isLoading={isSelectLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="value"
                options={options}
                onChange={(selectedOption) =>
                  handleWorkChange(selectedOption, index)
                }
              />
              <div className="flex">
                {workList.length - 1 === index && (
                  <button
                    className="ml-2 border border-green-600 bg-green-600 text-white p-2 cursor-pointer rounded transition-all ease-in-out hover:bg-green-700"
                    onClick={() => handleAddWorkList()}
                  >
                    <FaPlus />
                  </button>
                )}
                {workList.length !== 1 && (
                  <button
                    className="ml-2 border border-red-600 bg-red-600 text-white p-2 cursor-pointer rounded transition-all ease-in-out hover:bg-red-700"
                    onClick={() => handleRemoveWorkList(index)}
                  >
                    <RiDeleteBin6Fill />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need to fix loading which is commented */}
      <div className="flex mt-5 justify-center">
        <div className="w-full md:w-5/12">
          {/* {isLoading ? (
            <button
              disabled
              className="flex align-center rounded justify-center w-full bg-red-800 text-white py-2 cursor-pointer opacity-60"
            >
              <div className="w-5 h-5 border-4 border-teal-600 rounded-full loader mr-2"></div>
              <p>Please Wait...</p>
            </button>
          ) : ( */}
          <button className="w-full rounded-md bg-red-800 text-white py-2 cursor-pointer transition-all ease-in-out hover:bg-red-900">
            Submit
          </button>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default AddJobCard;
