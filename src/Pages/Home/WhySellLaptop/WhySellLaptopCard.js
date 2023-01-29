import React from "react";

const WhySellLaptopCard = ({whySell}) => {
    const {name, des, image} = whySell;
  return (
    <div className="card card-side bg-base-100 p-5 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default WhySellLaptopCard;
