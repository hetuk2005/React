/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const contextCreated = createContext(null);

export const ContextComponents = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <>
      <contextCreated.Provider value={{ data, setData }}>
        {children}
      </contextCreated.Provider>
    </>
  );
};
