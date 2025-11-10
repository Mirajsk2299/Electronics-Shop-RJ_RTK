import React from "react";
import "../styles/components.css";
import buds from "../assets/home-buds.jpg";
import phone from "../assets/home-phone.jpg";
import watch from "../assets/home-watch.jpg";

const Landingimg = () => {
  return (
    <div className="parent">
      <div className="child-one">
        <img src={phone} className="big-img" alt="Loading..." />
        <div className="img-text">
          <h3>Buy Smartphones</h3>
          <p>Discover the latest smartphones at unbeatable prices!</p>
          <button className="py-3 h-10 w-36 flex text-center justify-center items-center hover:border-2 rounded-lg hover:text-green-700 hover:text-lg font-bold">
            Explore More →
          </button>
        </div>
      </div>
      <div className="child-two">
        <img src={buds} className="small-img" alt="Loading..." />
        <img src={watch} className="small-img" alt="Loading..." />
      </div>
    </div>
  );
};

export default Landingimg;
