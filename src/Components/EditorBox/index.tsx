import React from "react";
import Tools from "../Tools";
import Graph from "../../Features/Graph";
const EditorBox = () => {
  return (
    <>
      <div className="flex w-1/2 h-screen border-solid border-y-2 border-gray-300  editor-box-container">
        <Tools />
        <Graph />
      </div>
    </>
  );
};

export default EditorBox;
