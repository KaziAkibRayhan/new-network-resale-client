import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";

const Payment = () => {
  const router = useParams();
  const id = router.id;
  //   console.log(id);

  const { data: order, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(`https://new-network-resale-server.vercel.app/bookings/${id}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  console.log(order);
  return (
    <div>
      <h3>Order: {order.itemName}</h3>
    </div>
  );
};

export default Payment;
