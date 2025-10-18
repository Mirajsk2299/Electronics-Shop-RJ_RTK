import React, { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, grandTotal } =
    useContext(ButtonContext);
  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <img src={item.image} alt={item.name} width={100} />
          <h3>{item.name}</h3>
          <p>Brand: {item.brand}</p>
          <p>Price: ₹{item.price}</p>
          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
          <p>Total: ₹{item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && <h2>Grand Total: ₹{grandTotal}</h2>}
    </div>
  );
};

export default Cart;
