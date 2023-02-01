import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";
import Spinner from "../../Pages/Shared/Spinner/Spinner";

const BuyerRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  if (loading || isBuyerLoading) {
    return <Spinner />;
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
};

export default BuyerRoute;
