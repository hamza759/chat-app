import { createContext, useState, useEffect, useContext } from "react";
import { useAuthcontext } from "./Authcontext";
import io from "socket.io-client";

const SocketContext = createContext();

export const UseSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const [onlineuser, setonlineuser] = useState([]);
  const { authUser } = useAuthcontext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      setsocket(socket);

      socket.on("getonlineUsers", (users) => {
        setonlineuser(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineuser }}>
      {children}
    </SocketContext.Provider>
  );
};
