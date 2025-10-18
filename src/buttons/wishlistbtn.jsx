import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function WishlistButton({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  return (
    <button
      onClick={() =>
        isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
      }
    >
      {isInWishlist ? "❌ Remove from Wishlist" : "❤️ Add to Wishlist"}
    </button>
  );
}
