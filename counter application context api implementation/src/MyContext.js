import React, { createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const data = "Hello from Parent via Context!";

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
};
