import React from "react";
import "../styles/pages.css";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-main">
        {/* Billing Details */}
        <div className="billing-details">
          <h3>Billing Details</h3>
          <form>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Contact No</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                rows="3"
                placeholder="Enter your address"
                required
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            <li>
              Product 1 <span>$50</span>
            </li>
            <li>
              Product 2 <span>$30</span>
            </li>
            <li className="total">
              Total <span>$80</span>
            </li>
          </ul>
          <button type="submit" className="place-order">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
