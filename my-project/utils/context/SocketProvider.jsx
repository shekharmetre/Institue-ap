import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { io } from "socket.io-client";

const socketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export const SocketProvider = ({ children }) => {
  const socket = useMemo(
    () => io("https://computer-insititute.onrender.com", { transports: ["websocket"] }),
    []
  );
  const [user, setUser] = useState();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    LoggedUser();
  }, [token]);

  const LoggedUser = async () => {
    const user = await axios.post(
      "https://computer-insititute.onrender.com/api/socket/tokenuser",
      { token }
    );
    setUser(user.data[0]?._id);
  };
  return (
    <socketContext.Provider value={{ user, socket }}>
      {children}
    </socketContext.Provider>
  );
};
