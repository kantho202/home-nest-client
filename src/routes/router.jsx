import { createBrowserRouter } from "react-router-dom";
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
import Loading from "../components/Loading";
import AuthLayout from "../Layout/AuthLayout";


const router = createBrowserRouter([
    {
        path: "/",
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
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/properties-details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`),
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
                element: <PrivateRoute>
                    <PropertiesDetails></PropertiesDetails>
                </PrivateRoute>
            },
            {
                path: '/allProperties',
<<<<<<< HEAD
                loader: () => fetch('https://online-ticket-booking-server.vercel.app/properties'),
=======
                loader: () => fetch('http://localhost:3000/properties'),
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
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
                loader: ({ params }) => fetch(`https://online-ticket-booking-server.vercel.app/myProperties/${params.id}`),
=======
                loader: ({ params }) => fetch(`http://localhost:3000/myProperties/${params.id}`),
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
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
            // {
            //     path:'/auth/logIn',
            //     element:<LogIn></LogIn>
            // },
            // {
            //     path:'/auth/register',
            //     element:<Register></Register>
            // },
            {
                path: "*",
                element: <NotFound></NotFound>
            }

        ]
    },
    {
        path: '/',
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
        children: [
            {
                path: '/auth/login',
                Component: LogIn
            },
            {
                path: '/auth/register',
                Component: Register
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
            },
        ]
    },

]);

export default router
