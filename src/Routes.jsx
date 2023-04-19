import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";

// all routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/login-account",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
