import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <div>
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
