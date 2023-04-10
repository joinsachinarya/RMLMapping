import React from "react";
import EditorBox from "../../Components/EditorBox";
import InputBox from "../../Components/InputBox";
import OutputBox from "../../Components/OutputBox";

const Home = () => {
  return (
    <>
      <div className="flex">
        <InputBox />
        <EditorBox />
        <OutputBox />
      </div>
    </>
  );
};

export default Home;
