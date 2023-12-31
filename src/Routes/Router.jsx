import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard.jsx"
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile.jsx";
import DetailsPge from "../Pages/Product/DetailsPge.jsx";
import PrivateRoute from "./PrivetRoute.jsx";
import AddProduct from "../Pages/Dashboard/Addproduct/AddProduct.jsx";
import Myproduct from "../Pages/Dashboard/MyProduct/Myproduct.jsx";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct.jsx";
import AllUsers from "../Pages/Dashboard/AllUser/AllUser.jsx";
import AdminRoute from "./AdminRoute.jsx";


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Product></Product>
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><DetailsPge></DetailsPge></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <PrivateRoute><Myproduct></Myproduct></PrivateRoute>
            },
            {
                path: '/dashboard/myproduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
            },
            {
                path: '/dashboard/alluser',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);
