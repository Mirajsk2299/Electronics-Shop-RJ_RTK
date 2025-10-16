import React from "react";
import "../styles/components.css";
import buds from "../assets/home-buds.jpg";
import phone from "../assets/home-phone.jpg";
import watch from "../assets/home-watch.jpg";

const Landingimg = () => {
  return (
    <div class="parent">
      <div class="child-one">
        <img src={phone} className="big-img" />
        <div className="img-text">
          <h3>Buy Smartphones</h3>
          <p>Discover the latest smartphones at unbeatable prices!</p>
          <button>Explore More →</button>
        </div>
      </div>
      <div class="child-two">
        <img src={buds} className="small-img" />
        <img src={watch} className="small-img" />
      </div>
    </div>
  );
};

export default Landingimg;
