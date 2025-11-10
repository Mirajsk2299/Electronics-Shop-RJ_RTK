import React, { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";
import "../styles/buttonstyles.css";

const Btnaddcart = ({ product }) => {
  const { addToCart } = useContext(ButtonContext);
  return (
    <div>
      <button className="adddd-button " onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Btnaddcart;
