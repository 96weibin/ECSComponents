import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../page/Home";
const router: RemixRouter = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    }
])
export default router;