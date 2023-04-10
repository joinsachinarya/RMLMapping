import React from "react";
import "./App.css";
// import PageTemplate from "./Features/PageTemplate";
import { RouterProvider } from "react-router-dom";
import router from "./routeConstants";

function App() {
  return (
    <div className="App">
      {/* <PageTemplate> */}
      <RouterProvider router={router} />
      {/* </PageTemplate> */}
    </div>
  );
}

export default App;
