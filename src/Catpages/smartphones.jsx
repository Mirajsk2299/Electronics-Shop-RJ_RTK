import React from "react";
import { phonesdata } from "../ProductData/PhonesData.js";
import Btnaddcart from "../buttons/btnaddcart";
import DetailsButton from "../buttons/detailsbtn";
import WishlistButton from "../buttons/wishlistbtn";
import "../styles/catpages.css";

const Smartphones = () => {
  const renderphone = phonesdata.slice(0, 8); // first 8 phones

  return (
    <div className="category-page">
      <h1 className="category-title">Smart Phones</h1>
      <div className="product-grid">
        {renderphone.map((phone) => (
          <div key={phone.id} className="product-card">
            <img src={phone.image} alt={phone.name} className="product-image" />
            <h3 className="product-name">{phone.name}</h3>
            <p className="product-brand">Brand: {phone.brand}</p>
            <p className="product-price">Price: ₹{phone.price}</p>
            <div className="product-buttons">
              <Btnaddcart product={phone} />
              <WishlistButton product={phone} />
              <DetailsButton product={phone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smartphones;
