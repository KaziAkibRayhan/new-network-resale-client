import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Spinner from "../../Pages/Shared/Spinner/Spinner";

const SellerRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  if (loading || isSellerLoading) {
    return <Spinner />;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
};

export default SellerRoute;
