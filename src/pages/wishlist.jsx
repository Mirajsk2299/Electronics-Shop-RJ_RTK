import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Wishlistbtn from "../buttons/wishlistbtn";
import Addbutton from "../buttons/btnaddcart";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-50">
      <div>
        <h1 className="mt-4 mb-2">My Wishlist</h1>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-4">
        <div className="mb-3">
          {wishlist.length === 0 && <h5>No items in wishlist</h5>}
        </div>
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-gray-400 rounded-lg p-2 w-[500px]  mb-4 flex flex-col items-center gap-2 justify-center "
          >
            <div className="w-[400-px] h-[350px]">
              <img
                src={item.image}
                alt={item.name}
                className=" w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3>{item.name}</h3>
            <h5>Brand: {item.brand}</h5>
            <p className="font-semibold text-green-700 text-lg">
              Price: ₹{item.price}
            </p>
            <Wishlistbtn product={item} />
            <Addbutton product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
