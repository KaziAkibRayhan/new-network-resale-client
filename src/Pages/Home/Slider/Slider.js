import React from "react";
import slider1 from "../../../assets/Slider/slider-1.jpg";
import slider2 from "../../../assets/Slider/slider-2.jpg";
import slider3 from "../../../assets/Slider/slider-3.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="relative">
          <img src={slider1} className="w-screen " alt="slider-img-1" />
          <h3 className=" bg-blue-600/30 p-5 backdrop-brightness-75 text-xl md:text-4xl lg:text-5xl font-bold text-white italic  absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Access to your own world. <br />
            Innovations you create!
          </h3>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="relative">
          <img src={slider2} className="w-screen " alt="slider-img-1" />
          <h3 className="  bg-blue-600/30 backdrop-brightness-75 p-5 text-xl md:text-4xl lg:text-5xl font-bold text-white italic  absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Think another way.
            <br /> 
            Your personal assistant!
          </h3>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <div className="relative">
          <img src={slider3} className="w-screen" alt="slider-img-1" />
          <h3 className=" bg-blue-600/30 backdrop-brightness-75 p-5 text-xl md:text-4xl lg:text-5xl font-bold text-white italic  absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            We do better. <br />
            The quicker, the better!
          </h3>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
