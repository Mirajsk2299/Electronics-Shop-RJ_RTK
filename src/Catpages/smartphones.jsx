import React from "react";
import { phonesdata } from "../ProductData/PhonesData.js";
import Btnaddcart from "../buttons/btnaddcart";
import DetailsButton from "../buttons/detailsbtn";
import WishlistButton from "../buttons/wishlistbtn";

const Smartphones = () => {
  const renderphone = phonesdata.slice(0, 8); // first 8 phones

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Phones</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap: "20px",
        }}
      >
        {renderphone.map((phone) => (
          <div
            key={phone.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={phone.image}
              alt={phone.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{phone.name}</h3>
            <p>Brand: {phone.brand}</p>
            <p>Price: ₹{phone.price}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
