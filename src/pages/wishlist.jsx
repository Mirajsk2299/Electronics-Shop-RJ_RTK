import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Wishlistbtn from "../buttons/wishlistbtn";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <Wishlistbtn product={item} />
        </div>
      ))}
    </div>
  );
}
