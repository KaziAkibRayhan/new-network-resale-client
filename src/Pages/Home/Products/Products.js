import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} setBookingProduct={setBookingProduct} />
      ))}
      { bookingProduct &&
        <BookingModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}></BookingModal>
      }
    </div>
  );
};

export default Products;
