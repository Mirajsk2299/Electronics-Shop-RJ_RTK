import React from "react";
import { saleProducts } from "../ProductData/saleProducts.js";
// import WishlistButton from "./WishlistButton"; // optional for Add to Wishlist / Cart
import Btnaddcart from "../buttons/btnaddcart";

const Hotselling = () => {
  // Select only the 7 products you want (based on id or index)
  const hotProducts = saleProducts.slice(0, 7); // first 7 items, you can customize

  return (
    <div className="hotproduct-parent">
      <div className="hitsell-tst">
        <h2>On Sale</h2>
      </div>

      <div className="hotsell-box">
        <div className="hotsell-left">
          {hotProducts.slice(0, 6).map((saleProducts) => (
            <div
              className="sellproduct-box"
              key={saleProducts.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={saleProducts.image}
                alt={saleProducts.name}
                className="hotsell-lfimg"
              />
              <p className="sell-para">{saleProducts.name}</p>
              {/* <button className="sale-btn">Add to Cart</button> */}
              <Btnaddcart product={saleProducts} />
              <span>upto 20% Off</span>
            </div>
          ))}
        </div>

        <div
          className="sellproduct-box"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={hotProducts[6]?.image}
            alt={hotProducts[6]?.name}
            className="hotsell-rimg"
          />
          <p className="sell-para">{hotProducts[6]?.name}</p>
          <div className="rsale-btnbox">
            <Btnaddcart product={saleProducts[6]} />
            <span>Get Flat 30% Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotselling;
