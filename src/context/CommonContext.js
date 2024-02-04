import { createContext, useState } from "react";
import defaultAvatar from "assets/defaultAvatar.png";
import fakeData from "fakeData.json";

export const CommonContext = createContext(null);

const CommonContextProvider = ({ children }) => {
  const options = {
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const [mailList, setMailList] = useState(fakeData);
  return (
    <CommonContext.Provider value={{ mailList, setMailList, defaultAvatar, options }}>
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContextProvider;
