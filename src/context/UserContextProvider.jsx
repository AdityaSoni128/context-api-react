import { useState } from "react";
import { Usercontext } from "./Usercontext";

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
};
