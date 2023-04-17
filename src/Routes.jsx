import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

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
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
