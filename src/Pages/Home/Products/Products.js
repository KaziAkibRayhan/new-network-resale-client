import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Products;
