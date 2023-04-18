import React from "react";
import Tools from "../Tools";
import InputCodePreview from "../../Features/InputCodePreview";
import InputDataTable from "../../Features/InputDataTable";
const InputPanel = () => {
  return (
    <>
      <div className="flex flex-col w-1/4 h-screen border-solid border-t-2 border-r-2 border-gray-300 bg-gray-100  input-panel-container">
        <Tools />
        <InputDataTable />
        <InputCodePreview />
      </div>
    </>
  );
};

export default InputPanel;
