import React from "react";
import ProductCategories from "../ProductCategories/ProductCategories";
import Slider from "../Slider/Slider";
import WhySellLaptop from "../WhySellLaptop/WhySellLaptop";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductCategories />
      <WhySellLaptop />
    </div>
  );
};

export default Home;
