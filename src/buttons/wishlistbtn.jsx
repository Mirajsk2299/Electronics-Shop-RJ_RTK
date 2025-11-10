import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/buttonstyles.css";

export default function WishlistButton({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  return (
    <button
      className="wshlst-btn text-black"
      onClick={() =>
        isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
      }
    >
      {isInWishlist ? "Remove ❌ " : " Add to ❤️"}
    </button>
  );
}
