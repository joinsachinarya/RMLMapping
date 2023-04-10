import React from "react";
import EditorBox from "../../Components/EditorBox";
import InputBox from "../../Components/InputBox";
import OutputBox from "../../Components/OutputBox";
import Menubar from "../../Features/Menubar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Menubar />
        </div>
        <div className="flex">
          <InputBox />
          <EditorBox />
          <OutputBox />
        </div>
      </div>
    </>
  );
};

export default Home;
