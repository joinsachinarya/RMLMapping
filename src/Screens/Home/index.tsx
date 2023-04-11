import React from "react";
import EditorBox from "../../Components/EditorBox";
import InputBox from "../../Components/InputBox";
import OutputBox from "../../Components/OutputBox";
import PageTemplate from "../../Features/PageTemplate";

const Home = () => {
  return (
    <>
      <PageTemplate>
        <div className="flex flex-col homepage-container">
          <div className="flex">
            <InputBox />
            <EditorBox />
            <OutputBox />
          </div>
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
