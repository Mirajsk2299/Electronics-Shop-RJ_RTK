// src/components/QuickViewCard.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeQuickView } from "../redux/btns/quickviewSlice.js";

const QuickViewCard = () => {
  const dispatch = useDispatch();
  const { product, isOpen } = useSelector((state) => state.quickView);

  if (!isOpen || !product) return null; // don't render if closed

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-white p-5 rounded-lg w-[400px] text-center relative ">
        <img
          src={product.image}
          alt="img loading..."
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <h6>Price: {product.price}/-</h6>
        <p>{product.description}</p>
        <button
          onClick={() => dispatch(closeQuickView())}
          style={{
            marginTop: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuickViewCard;
