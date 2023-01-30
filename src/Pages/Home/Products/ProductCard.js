import React from "react";

const ProductCard = ({ product }) => {
  const {
    Year_of_purchase,
    brand,
    condition,
    location,
    image,
    description,
    mobile,
    name,
    original_price,
    resale_price,
    post_time,
    years_of_use,
    // verify_seller,
    seller_name,
    seller_email,
  } = product;

  return (
    <div className="card shadow-lg">
      <figure>
        <img className="w-full" src={image} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Brand:</span> {brand}
        </p>
        <p>
          <span className="font-bold">Resale Price: $</span>
          {resale_price}
        </p>
        <p>
          <span className="font-bold">
            <span className="font-bold">Original Price: $</span>
          </span>
          {original_price}
        </p>
        <p>
          <span className="font-bold">Location:</span> {location}
        </p>
        <p>
          <span className="font-bold">Product Condition:</span> {condition}
        </p>
        <p>
          <span className="font-bold">Seller Name:</span> {seller_name}
        </p>
        <p>
          <span className="font-bold">Seller Email:</span> {seller_email}
        </p>
        <p>
          <span className="font-bold">Seller Mobile No.:</span> 0{mobile}
        </p>
        <p>
          <span className="font-bold">Post Time:</span> {post_time}
        </p>
        <p>
          <span className="font-bold">Year_of_Purchase:</span>{" "}
          {Year_of_purchase}
        </p>
        <p>
          <span className="font-bold">Year_of_Use:</span> {years_of_use}
        </p>
        <p>
          <span className="font-bold">Product Description:</span> {description}.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
