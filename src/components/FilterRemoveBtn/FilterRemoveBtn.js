import React from "react";

const FilterRemoveBtn = ({onClick}) => {
  return (
    <button className="absolute border border-red-500 bg-red-500 rounded-full text-white h-7 w-7 top-1 right-4 ease-in-out hover:bg-red-400"
    onClick={()=>onClick()}
    >
      X
    </button>
  );
};

export default FilterRemoveBtn;
