import { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";
import Btnaddcart from "../buttons/btnaddcart";

export default function DetailsPage() {
  const { detailsProduct } = useContext(DetailsContext);

  if (!detailsProduct)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">No product selected</p>
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 pt-12">
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 w-[500px] flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>

        <div className="w-[400px] h-[400px]">
          <img
            src={detailsProduct.image}
            alt={detailsProduct.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {detailsProduct.name}
        </h2>

        <h5>Brand: {detailsProduct.brand}</h5>
        <h6>Category: {detailsProduct.category}</h6>

        <p className="text-green-700 font-bold text-lg">
          ₹{detailsProduct.price}
        </p>

        <Btnaddcart
          product={detailsProduct}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        />
      </div>
    </div>
  );
}
