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
<<<<<<< HEAD
        element: <MainLayout />,
=======
<<<<<<< HEAD
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/properties-details/:id',
                loader: ({ params }) => fetch(`https://online-ticket-booking-server.vercel.app/properties/${params.id}`),
=======
        Component: MainLayout,
        hydrateFallbackElement: <Loading></Loading>,
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/properties-details/:id',
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://home-nest-cyan.vercel.app/properties/${params.id}`),
=======
                loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`),
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
                element: <PrivateRoute>
                    <PropertiesDetails></PropertiesDetails>
                </PrivateRoute>
            },
            {
                path: '/allProperties',
<<<<<<< HEAD
                loader: () => fetch('https://home-nest-cyan.vercel.app/properties'),
=======
<<<<<<< HEAD
                loader: () => fetch('https://online-ticket-booking-server.vercel.app/properties'),
=======
                loader: () => fetch('http://localhost:3000/properties'),
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
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
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://home-nest-cyan.vercel.app/myProperties/${params.id}`),
=======
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://online-ticket-booking-server.vercel.app/myProperties/${params.id}`),
=======
                loader: ({ params }) => fetch(`http://localhost:3000/myProperties/${params.id}`),
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
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
<<<<<<< HEAD
        element: <AuthLayout />,
=======
<<<<<<< HEAD
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <LogIn />
            },
            {
                path: '/auth/register',
                element: <Register />
=======
        element: <AuthLayout></AuthLayout>,
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
        children: [
            {
                path: '/auth/login',
                element: <LogIn />
            },
            {
                path: '/auth/register',
<<<<<<< HEAD
                element: <Register />
=======
                Component: Register
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
            },
        ]
    },

]);

export default router