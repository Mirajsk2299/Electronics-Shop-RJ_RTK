// src/components/DetailsButton.jsx
import { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";
import { useNavigate } from "react-router-dom";

export default function DetailsButton({ product }) {
  const { setDetailsProduct } = useContext(DetailsContext);
  const navigate = useNavigate();

  const directdetails = () => {
    setDetailsProduct(product);
    navigate("/detailspg");
  };

  return <button onClick={directdetails}>Details</button>;
}
