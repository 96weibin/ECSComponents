import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
