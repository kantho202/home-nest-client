import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProperties from "../Pages/AddProperties/AddProperties";
import AllProperties from "../Pages/AllProperties/AllProperties";
import MyProperties from "../Pages/MyProperties/MyProperties";
import MyRatings from "../Pages/MyRatings/MyRatings";
import LogIn from "../Pages/Auth/LogIn";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'/allProperties',
            element:<AllProperties></AllProperties>
        },
        {
            path:'/addProperties',
            element:<PrivateRoute>
                <AddProperties></AddProperties>
            </PrivateRoute>
        },
        {
            path:'/myProperties',
            element:<PrivateRoute>
                <MyProperties></MyProperties>
            </PrivateRoute>
        },
        {
            path:'/myRatings',
            element:<PrivateRoute>
                <MyRatings></MyRatings>
            </PrivateRoute>
        },
        {
            path:'/auth/logIn',
            element:<LogIn></LogIn>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        }

    ]
  },
]);

export default router
