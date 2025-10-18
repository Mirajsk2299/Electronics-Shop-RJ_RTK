// src/context/DetailsContext.jsx
import { createContext, useState } from "react";

export const DetailsContext = createContext();

export function DetailsProvider({ children }) {
  const [detailsProduct, setDetailsProduct] = useState(null);

  return (
    <DetailsContext.Provider value={{ detailsProduct, setDetailsProduct }}>
      {children}
    </DetailsContext.Provider>
  );
}
