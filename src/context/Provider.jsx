import React from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
export const InfoContext = createContext();
function Provider({ children }) {
  const [user, setUser] = useState([
    { id: uuidv4(), name: "mahdi" },
    { id: uuidv4(), name: "milad" },
    { id: uuidv4(), name: "meysam" },
  ]);
  return (
    <div>
      <InfoContext.Provider value={{ user, setUser }}>
        {children}
      </InfoContext.Provider>
    </div>
  );
}

export default Provider;
