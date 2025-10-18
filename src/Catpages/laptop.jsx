import React from "react";
import { laptops } from "../ProductData/LaptopData.js";
import Btnaddcart from "../buttons/btnaddcart";
import DetailsButton from "../buttons/detailsbtn";
import WishlistButton from "../buttons/wishlistbtn";

const Laptop = () => {
  const renderlaptop = laptops.slice(0, 8); // first 8 laptops

  return (
    <div style={{ padding: "20px" }}>
      <h1>Laptops</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap: "20px",
        }}
      >
        {renderlaptop.map((laptop) => (
          <div
            key={laptop.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={laptop.image}
              alt={laptop.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{laptop.name}</h3>
            <p>Brand: {laptop.brand}</p>
            <p>Price: ₹{laptop.price}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
