import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "../Shared/Spinner/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: Orders = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(`https://new-network-resale-server.vercel.app/bookings/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {Orders?.map((order, i) => (
            <tr className="hover" key={order._id}>
              <th>{i + 1}</th>
              <td>
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={order.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{order.itemName}</td>
              <td>{order.sellingPrice}</td>
              <td>
                <Link to={`/dashboard/payment/${order._id}`}>
                <button className="btn btn-sm btn-info">Pay</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
