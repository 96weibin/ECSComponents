import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage"
export default createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);