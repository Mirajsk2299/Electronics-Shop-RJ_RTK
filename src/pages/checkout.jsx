import "../styles/pages.css";
import React, { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";

const Checkout = () => {
  const { cart, removeItem, grandTotal } = useContext(ButtonContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("❌ No items in the cart!");
      return;
    }

    alert("✅ Order Placed successfully!");
    e.target.reset();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}
      >
        <div
          className="billing-details"
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "400px",
          }}
        >
          <h3>Billing Details</h3>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Contact No</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className="input-group">
            <label>Address</label>
            <textarea
              rows="3"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
        </div>

        <div
          className="order-summary"
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "600px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Order Summary
          </h3>

          <ul
            style={{
              gap: "10px",
              listStyleType: "decimal",
              padding: 0,
            }}
          >
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  listStylePosition: "inside",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "8px",
                  gap: "15px",
                }}
              >
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              borderTop: "1px solid #ccc",
              marginTop: "15px",
              paddingTop: "10px",
              fontSize: "18px",
            }}
          >
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#4c7a7e",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
