import React, { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  // logic here

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove product
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Grand Total
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ButtonContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        grandTotal,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};
