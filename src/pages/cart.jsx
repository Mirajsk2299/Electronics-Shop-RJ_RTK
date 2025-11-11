import React, { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, grandTotal } =
    useContext(ButtonContext);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Cart Page</h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-lg">No items in cart</p>
      )}

      <div className="flex flex-wrap justify-center gap-9 w-full">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-300 rounded-lg p-4 w-[500px] flex flex-col items-center gap-3 bg-white shadow-md"
          >
            <div className="w-[400px] h-[350px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="font-bold text-xl">{item.name}</h3>
            <h5 className="text-gray-600">Brand: {item.brand}</h5>
            <p className="font-semibold text-green-700 text-lg">
              Price: ₹{item.price}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>

            <p className="font-semibold text-lg">
              Total: ₹{item.price * item.quantity}
            </p>

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-6">
            Grand Total: ₹{grandTotal}
          </h2>
          <Link to="/checkout">
            <button className="w-[10rem] py-2 bg-[#4c7a7e] text-white font-semibold rounded-lg  hover:bg-[#97b1b0]">
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
