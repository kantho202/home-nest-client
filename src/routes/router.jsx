import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
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
import Loading from "../components/Loading";
import AuthLayout from "../Layout/AuthLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardProfile from "../Pages/Dashboard/DashboardProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/properties-details/:id',
                loader: ({ params }) => fetch(`https://home-nest-cyan.vercel.app/properties/${params.id}`),
                element: <PrivateRoute>
                    <PropertiesDetails></PropertiesDetails>
                </PrivateRoute>
            },
            {
                path: '/allProperties',
                loader: () => fetch('https://home-nest-cyan.vercel.app/properties'),
                element: <AllProperties></AllProperties>
            },
            {
                path: '/addProperties',
                element: <PrivateRoute>
                    <AddProperties></AddProperties>
                </PrivateRoute>
            },
            {
                path: '/myProperties',
                element: <PrivateRoute>
                    <MyProperties></MyProperties>
                </PrivateRoute>
            },
            {
                path: '/myProperties/:id',
                loader: ({ params }) => fetch(`https://home-nest-cyan.vercel.app/myProperties/${params.id}`),
                element: <PrivateRoute>
                    <MyPropertiesDetails></MyPropertiesDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <p>Loading</p>
            },
            {
                path: '/myRatings',
                element: <PrivateRoute>
                    <MyRatings></MyRatings>
                </PrivateRoute>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/profile',
                element: <DashboardProfile />
            },
            {
                path: '/dashboard/my-properties',
                element: <MyProperties />
            },
            {
                path: '/dashboard/add-property',
                element: <AddProperties />
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <LogIn />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ]
    },

]);

export default router
