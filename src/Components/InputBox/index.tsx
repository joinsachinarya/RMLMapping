import React from "react";
import Tools from "../Tools";
import InputDataPreview from "../InputCodePreview";
const InputBox = () => {
  return (
    <>
      <div className="flex flex-col w-1/4 h-screen border-solid border-t-2 border-r-2 border-gray-300 bg-gray-100  input-box-container">
        <Tools />

        <InputDataPreview />
      </div>
    </>
  );
};

export default InputBox;
