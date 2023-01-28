import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
