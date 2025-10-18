import { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";
import Btnaddcart from "../buttons/btnaddcart";

export default function DetailsPage() {
  const { detailsProduct } = useContext(DetailsContext);

  if (!detailsProduct) return <p>No product selected</p>;

  return (
    <div>
      <h1>Product Details</h1>
      <img src={detailsProduct.image} alt={detailsProduct.name} width="300" />
      <h2>{detailsProduct.name}</h2>
      <p>₹{detailsProduct.price}</p>
      <Btnaddcart product={detailsProduct} />
    </div>
  );
}
