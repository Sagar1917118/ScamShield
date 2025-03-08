// src/context/SocketContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// Backend URL
const SOCKET_URL = "http://127.0.0.1:5000";

// Create Socket Context
const SocketContext = createContext();

// Create a Provider Component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);

    newSocket.on("connect", () => {
      console.log("🔗 Connected to Socket.IO server");
    });

    newSocket.on("disconnect", () => {
      console.log("❌ Disconnected from Socket.IO server");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom Hook to use Socket Context
export const useSocket = () => {
  return useContext(SocketContext);
};
