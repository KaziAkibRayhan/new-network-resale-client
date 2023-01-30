import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ productCategory }) => {
  const { brand, image, _id } = productCategory;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand}</h2>
        <div className="card-actions justify-end">
          <Link to={`/category/${_id}`}>
            <button className="btn btn-primary">
              See All {brand} Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
