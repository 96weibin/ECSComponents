import {
  RouterProvider,
} from "react-router-dom";
import './App.css'
import router from './routers/route'
import SimpleBottomNavigation from './components/BottomNavigation/BottomNavigation';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </>
  )
}

export default App
