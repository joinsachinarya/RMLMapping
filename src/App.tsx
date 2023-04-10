import React, { useState } from "react";
import "./App.css";
import Home from "./Screens/Home";
import PageTemplate from "./Features/PageTemplate";

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <Home />
      </PageTemplate>
    </div>
  );
}

export default App;
