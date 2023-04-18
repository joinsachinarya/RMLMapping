import React, { useState } from "react";
import jsonInput from "../../assets/input.json";

const InputDataTable = () => {
  // const [] = useState(false);
  const input = JSON.stringify(jsonInput);
  const handleClick = () => {
    console.log(1 === 1);
  };
  return (
    <div className="relative top-2/3 overflow-hidden overflow-x-auto">
      <button className="h-20 cursor-pointer" onClick={handleClick}>
        {input}
      </button>
    </div>
  );
};
export default InputDataTable;
