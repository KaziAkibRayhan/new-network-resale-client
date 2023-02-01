import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AddAProduct from "../Pages/Dashboard/AddAProduct";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyProducts from "../Pages/Dashboard/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import SellerRoute from "./SellerRoute/SellerRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoutes>
            <Products />
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-a-product",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
    ],
  },
]);
