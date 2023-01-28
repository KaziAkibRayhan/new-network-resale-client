import React from "react";
import slider1 from "../../../assets/Slider/slider-1.jpg";
import slider2 from "../../../assets/Slider/slider-2.jpg";
import slider3 from "../../../assets/Slider/slider-3.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full my-7">
      <div id="slide1" className="carousel-item bg-purple-400 relative w-full">
        <div className="flex justify-center">
          <div className="w-1/3 flex justify-center items-center">
            <h3 className="text-3xl font-bold text-white italic">
              Access to your own world. <br />
              Innovations you create!
            </h3>
          </div>
          <div className="w-2/3">
            <img src={slider1} className="w-full" alt="slider-img-1" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item bg-purple-400 relative w-full">
        <div className="flex justify-center">
          <div className="w-1/3 flex justify-center items-center">
            <h3 className="text-3xl font-bold text-white italic">
              Think another way.
              <br />
              Your personal assistant!
            </h3>
          </div>
          <div className="w-2/3">
            <img src={slider2} className="w-full" alt="slider-img-1" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item bg-purple-400 relative w-full">
        <div className="flex justify-center">
          <div className="w-1/3 flex justify-center items-center">
            <h3 className="text-3xl font-bold text-white italic">
              We do better. <br />
              The quicker, the better!
            </h3>
          </div>
          <div className="w-2/3">
            <img src={slider3} className="w-full" alt="slider-img-1" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[500px]">
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
