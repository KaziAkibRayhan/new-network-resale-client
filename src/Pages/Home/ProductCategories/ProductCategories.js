import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import ProductCategoryCard from "./ProductCategoryCard";

const ProductCategories = () => {
  const { data: productCategories, isLoading } = useQuery({
    queryKey: ["product-categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/product-categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {productCategories?.map((productCategory) => (
        <ProductCategoryCard
          productCategory={productCategory}
          key={productCategory._id}
        />
      ))}
    </div>
  );
};

export default ProductCategories;
