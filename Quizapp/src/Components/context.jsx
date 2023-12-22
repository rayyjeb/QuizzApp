// React Setup
import React, { createContext, useState } from "react";
// Making Context
export const AppContext = createContext();
// Context Component
const Context = ({ children }) => {
  const [checkCorrect, setIsCorrect] = useState(0);
  // Context provider
  return (
    <AppContext.Provider
      value={{
        checkCorrect,
        setIsCorrect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// exporting context
export default Context;
