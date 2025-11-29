import React from "react";
import { useNavigate } from "react-router-dom";

import Phone from "../assets/phone.jpg";
import Laptop from "../assets/laptop.jpg";
import Watch from "../assets/watch.jpg";
import Audio from "../assets/audio.jpg";
import Accessories from "../assets/accessories.jpg";
import Camera from "../assets/camera.jpg";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="category-parent">
      <div
        className="catego-product"
        style={{ backgroundImage: `url(${Phone})` }}
      >
        <button
          className="category-btn "
          onClick={() => navigate("/smartphones")}   
        >
          Smart Phones
        </button>
      </div>

      <div
        className="catego-product"
        style={{ backgroundImage: `url(${Laptop})` }}
      >
        <button className="category-btn" onClick={() => navigate("/laptop")}>
          Laptops
        </button>
      </div>

      <div
        className="catego-product"
        style={{ backgroundImage: `url(${Watch})` }}
      >
        <button className="category-btn" onClick={() => navigate("/swatch")}>
          Smart Watchs
        </button>
      </div>

      <div
        className="catego-product"
        style={{ backgroundImage: `url(${Audio})` }}
      >
        <button className="category-btn">
          Audios &nbsp;
          <br />
          <span className="soon-spn"> Comming Soon ! </span>
        </button>
      </div>

      <div
        className="catego-product"
        style={{ backgroundImage: `url(${Camera})` }}
      >
        <button className="category-btn">
          Cameras &nbsp; <br />
          <span className="soon-spn"> Comming Soon ! </span>
        </button>
      </div>

      <div
        className="catego-product"
        style={{ backgroundImage: `url(${Accessories})` }}
      >
        <button className="category-btn">
          Accessories &nbsp;
          <br />
          <span className="soon-spn"> Comming Soon ! </span>
        </button>
      </div>
    </div>
  );
};

export default Category;
