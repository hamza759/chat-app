import { createContext, useState, useContext } from "react";

export const Authcontext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthcontext = () => {
  return useContext(Authcontext);
};

export const Authcontextprovider = ({ children }) => {
  const [authUser, setauthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <Authcontext.Provider value={{ authUser, setauthUser }}>
      {children}
    </Authcontext.Provider>
  );
};
