import React from "react";
import Tools from "../Tools";
import Graph from "../../Features/Graph";
const EditorPanel = () => {
  return (
    <>
      <div className="flex flex-col w-1/2 h-screen border-solid border-y-2 border-gray-300  editor-panel-container">
        <Tools />
        <Graph />
      </div>
    </>
  );
};

export default EditorPanel;
