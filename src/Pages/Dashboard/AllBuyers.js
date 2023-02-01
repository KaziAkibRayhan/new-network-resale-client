import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Spinner from "../Shared/Spinner/Spinner";

const AllBuyers = () => {
  const buyer = "buyer";
  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://new-network-resale-server.vercel.app/users/${buyer}`);
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure delete!, After delete it cannot be undone!"
    );
    if (proceed) {
      fetch(`https://new-network-resale-server.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Successfully deleted the Buyer!");
            refetch();
          }
        });
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Buyer Name</th>
            <th>Buyer Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((buyer, i) => (
            <tr className="hover" key={buyer._id}>
              <th>{i + 1}</th>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(buyer._id)}
                  className="btn btn-sm btn-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
