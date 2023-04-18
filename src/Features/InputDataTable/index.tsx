import React, { useCallback, useState } from "react";
import jsonInput from "../../assets/input.json";

const InputDataTable = () => {
  const [inputData, setInputData] = useState("");
  const input = JSON.stringify(jsonInput);

  const onChange = useCallback((value: unknown, viewUpdate: unknown) => {
    setInputData(input);
    console.log("value:", value);
  }, []);

  return (
    <div className="relative top-2/3">
      {/* <CodeMirror value={inputData} height="10rem" onChange={onChange} /> */}
      {inputData}
    </div>
  );
};
export default InputDataTable;
