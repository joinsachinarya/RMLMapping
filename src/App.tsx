import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routeConstants";
import PageTemplate from "./Features/PageTemplate";

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <RouterProvider router={router} />
      </PageTemplate>
    </div>
  );
}

export default App;
