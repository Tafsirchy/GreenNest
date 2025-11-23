import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Root/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PlantDetails from "../Pages/PlantDetails";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import ConsultationForm from "../Pages/ConsultationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/plants",
    element: <Plants />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/plantDetails/:id",
    element: <PlantDetails />,
  },
  {
    path: "/consultation",
    element: <ConsultationForm />,
  },
]);

export default router;
