import React, { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";

const Btnaddcart = ({ product }) => {
  const { addToCart } = useContext(ButtonContext);
  return (
    <div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Btnaddcart;
