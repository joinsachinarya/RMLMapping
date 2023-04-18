import React from "react";
import EditorPanel from "../../Components/EditorPanel";
import InputPanel from "../../Components/InputPanel";
import OutputPanel from "../../Components/OutputPanel";
import PageTemplate from "../../Features/PageTemplate";

const Home = () => {
  return (
    <>
      <PageTemplate>
        <div className="flex flex-col homepage-container">
          <div className="flex">
            <InputPanel />
            <EditorPanel />
            <OutputPanel />
          </div>
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
