import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Mychat from "./Mychat";
import Header from "./Header";
const ChatHome = () => {  
  const [isReloading, setIsReloading] = useState(true);

  const data = sessionStorage.getItem("auth");
  useEffect(() => {
    if (data) {
      dataadd(data);
    }
  }, [data]);
  const dataadd = async (sessionData) => {
    const { email, displayName, photoURL } = JSON.parse(sessionData);
    try {
      const main = await axios.post("http://localhost:8080/api/socket/chat", {
        email,
        name: displayName,
        pic: photoURL,
      });
      console.log("you are good to use");
      toast("welcome chat");
    } catch (error) {
      console.error("you are already in chat");
      toast(`welcome ${displayName}`);
    }
  };
  return (
    <>
      <Header />
      <Mychat />
    </>
  );
};

export default ChatHome;
