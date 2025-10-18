import React from "react";
import { watches } from "../ProductData/WatcheData.js";
import Btnaddcart from "../buttons/btnaddcart";
import DetailsButton from "../buttons/detailsbtn";
import WishlistButton from "../buttons/wishlistbtn";

const Swatch = () => {
  const renderwatches = watches.slice(0, 8);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smartwatches</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap: "20px",
        }}
      >
        {renderwatches.map((watch) => (
          <div
            key={watch.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={watch.image}
              alt={watch.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{watch.name}</h3>
            <p>Brand: {watch.brand}</p>
            <p>Price: ₹{watch.price}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
