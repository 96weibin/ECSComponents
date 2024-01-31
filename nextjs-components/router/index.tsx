import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../page/Home";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    }, 
    {
        path: '/about',
        element: <Home/>
    }
])
export default router;