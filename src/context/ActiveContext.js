import { createContext, useState } from "react";

export const ActiveContext = createContext(null);

const ActiveContextProvider = ({ children }) => {
  const [activeArtist, setActiveArtist] = useState("방현재");
  return (
    <ActiveContext.Provider value={{ activeArtist, setActiveArtist }}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContextProvider;
