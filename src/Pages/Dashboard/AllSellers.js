import { toast } from "react-hot-toast";
import React, { useState } from "react";
import axios from "axios";

const AllSellers = () => {
  const [sellers, setSellers] = useState(null);
  const [refresh, setRefresh] = useState(false)
  const Seller = "Seller";
  axios
    .get(`https://new-network-resale-server.vercel.app/users/${Seller}`)
    .then(function (data) {
      setSellers(data.data);
      setRefresh(refresh)
    })
    .catch(function (error) {
      toast.error(error.message);
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
            toast.success("Successfully deleted the Seller!");
            setRefresh(!refresh)
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller, i) => (
            <tr className="hover" key={seller._id}>
              <th>{i + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(seller._id)}
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

export default AllSellers;
