import React, { createContext } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  // logic here

  return <ButtonContext.Provider value={{}}>{children}</ButtonContext.Provider>;
};
