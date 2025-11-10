import React from "react";
import { laptops } from "../ProductData/LaptopData.js";
import Btnaddcart from "../buttons/btnaddcart";
import DetailsButton from "../buttons/detailsbtn";
import WishlistButton from "../buttons/wishlistbtn";
import "../styles/catpages.css";

const Laptop = () => {
  const renderlaptop = laptops.slice(0, 8); // first 8 laptops

  return (
    <div className="category-page">
      <h1 className="category-title">Laptops</h1>
      <div className="product-grid">
        {renderlaptop.map((laptop) => (
          <div key={laptop.id} className="product-card">
            <img
              src={laptop.image}
              alt={laptop.name}
              className="product-image"
            />
            <h3 className="product-name">{laptop.name}</h3>
            <p className="product-brand">Brand: {laptop.brand}</p>
            <p className="product-price">Price: ₹{laptop.price}</p>
            <div className="product-buttons">
              <Btnaddcart product={laptop} />
              <WishlistButton product={laptop} />
              <DetailsButton product={laptop} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptop;
