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
import PropertiesDetails from "../components/PropertiesDetails";
import MyPropertiesCard from "../components/MyPropertiesCard";
import NotFound from "../Pages/NotFound/NotFound";
import MyPropertiesDetails from "../components/MyPropertiesDetails";


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
            path:'/properties-details/:id',
            loader:({params})=>fetch(`https://home-nest-cyan.vercel.app//properties/${params.id}`),
            element:<PrivateRoute>
                <PropertiesDetails></PropertiesDetails>
            </PrivateRoute>
        },    
        {
            path:'/allProperties',
            loader:()=>fetch('https://home-nest-cyan.vercel.app//properties'),
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
            path:'/myProperties/:id',
            loader:({params})=>fetch(`https://home-nest-cyan.vercel.app//myProperties/${params.id}`),
            element:<PrivateRoute>
                <MyPropertiesDetails></MyPropertiesDetails>
            </PrivateRoute>,
            hydrateFallbackElement:<p>Loading</p>
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
        },
        {
            path:"*",
            element:<NotFound></NotFound>
        }        

    ]
  },
]);

export default router
