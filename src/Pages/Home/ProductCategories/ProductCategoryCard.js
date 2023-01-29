import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ productCategory }) => {
  const { brand, image, _id } = productCategory;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl my-8">
      <Link to={`/category/${_id}`}>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
        </div>
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
      </Link>
    </div>
  );
};

export default ProductCategoryCard;
