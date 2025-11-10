import React from "react";
import { watches } from "../ProductData/WatcheData.js";
import Btnaddcart from "../buttons/btnaddcart";
import DetailsButton from "../buttons/detailsbtn";
import WishlistButton from "../buttons/wishlistbtn";
import "../styles/catpages.css";

const Swatch = () => {
  const renderwatches = watches.slice(0, 8); // first 8 watches

  return (
    <div className="category-page">
      <h1 className="category-title">Smartwatches</h1>
      <div className="product-grid">
        {renderwatches.map((watch) => (
          <div key={watch.id} className="product-card">
            <img src={watch.image} alt={watch.name} className="product-image" />
            <h3 className="product-name">{watch.name}</h3>
            <p className="product-brand">Brand: {watch.brand}</p>
            <p className="product-price">Price: ₹{watch.price}</p>
            <div className="product-buttons">
              <Btnaddcart product={watch} />
              <WishlistButton product={watch} />
              <DetailsButton product={watch} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swatch;
