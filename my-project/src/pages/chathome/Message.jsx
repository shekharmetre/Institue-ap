import { BsEyeFill, BsSendFill } from "react-icons/bs";
import ScrollToBottom from 'react-scroll-to-bottom'

import axios from "axios";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { useSocket } from "../../../utils/context/SocketProvider";

import SingleChat from "./SingleChat";
import GroupChat from "./GroupChat";
import { addMessage } from "../../store/slice/Message";
import Chatmessage from "./Chatmessage";

const Message = ({ sendMessageData }) => {
  const [messages, setMessages] = useState("");
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");
  const loggedUser = useSocket();
  const socket = loggedUser.socket;
  const [socketConnected, setsocketconnection] = useState(false);
  let selctedChatCompare;

  const [loading, setLoading] = useState(false);
  const messageRef = useRef(null)

  useEffect(() => {
    socket.emit("setup", loggedUser.user);
    socket.on("connection", () => setsocketconnection(true));
  }, [sendMessageData && sendMessageData?._id]);
  const sendMessage = async () => {
    try {
      setNewMessage("");
      const { data } = await axios.post("https://computer-insititute.onrender.com/api/message", {
        content: newMessage,
        chatId: sendMessageData?._id,
        loggedUser: loggedUser.user,
      });
      socket.emit("new:message", data);
      setMessages([...messages, data]);
      dispatch(addMessage("mesage sent successfully"));
    } catch (error) {
      dispatch(addMessage("not sended messages"));
    }
  };

  // console.log(sendMessageData)

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://computer-insititute.onrender.com/api/message/${
          sendMessageData && sendMessageData?._id
        }`
      );
      // Update messages state using the callback function
      setMessages(data);
      setLoading(false);
      socket.emit("join:chat", sendMessageData?._id);
    } catch (error) {
      console.log(error)
      // dispatch(addMessage("Error fetching messages"));
    }
  };

  useEffect(() => {
    fetchMessages();
    selctedChatCompare = sendMessageData?._id;
  }, [sendMessageData && sendMessageData?._id]);

  useEffect(() => {
    socket.on("message:received", (newMessagegRecevid) => {
      if (sendMessageData?._id === newMessagegRecevid.chat._id){
        setMessages([...messages, newMessagegRecevid]);
      }else{
        // creating notification messages
      }
        
    })
  });
  
  //

  const notuser =
    sendMessageData?.isGroup === false &&
    sendMessageData.users.find((item) => item._id !== loggedUser.user);
  return (
    <>
      <div
        className={` w-full rounded-xl px-5 ${sendMessageData ? "" :"hidden"} cursor-pointer shadows p-2 md:h-[74vh] h-[70vh] ${
          !sendMessageData ? "grid place-content-center mt-2" : "mt-2"
        }`} style={{backgroundImage:"url('https://i.gifer.com/HcHY.gif')"}}
      >
        {sendMessageData ? (
          <>
            <div className="" >
              <div className="flex items-center justify-between mb-5" >
                <p className="text-2xl font-sans text-white">
                  {notuser.name || "group : " + sendMessageData?.chatName}
                </p>
                <div className="bg-slate-300 p-2 rounded-lg">
                  <BsEyeFill
                    className="cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  />
                </div>
              </div>
              {/* newMessagees */}
              <div className="">
                <div className="max-w-full  max-h-[400px] h-[390px] overflow-y-scroll"  >
                  <div className="flex flex-col gap-5">
                    <div>
                      {sendMessageData?.users &&
                        sendMessageData?.users?.map((item, index) => (
                          <p
                            className="text-center  m-2 text-white text-xl font-sans leading-6"
                            key={index}
                          >
                            active {item.name}
                          </p>
                        ))}
                    </div>
                    <Chatmessage messages={messages} />
                  </div>
                </div>
                <div className="sticky bottom-1 mt-2 z-50" >
                  <input
                    type="text"
                    className="w-full relative  text-white font-sans focus border-none h-14 px-5 bg-transparent rounded-2xls"
                    placeholder="Type Message"
                    onChange={typingHandler}
                    value={newMessage}
                    
                  />
                  <button className="hover:opacity-60" onClick={sendMessage}>
                    <BsSendFill
                      className="absolute bottom-3 right-10 cursor-pointer tooltip  text-yellow-500 text-3xl opacity-100"
                      title="send Message" // onClick={createAndSendMessage}
                    />
                  </button>
                </div>
              </div>
              {/* newMessagees */}
              <div className="bg-slate-200 w-full"></div>
            </div>
          </>
        ) : (
          <div className="grid place-content-center">
            <h1 className="text-2xl opacity-60">
              Click on a user to start chatting
            </h1>
          </div>
        )}
      </div>
      {sendMessageData && sendMessageData.isGroup ? (
        <GroupChat sendMessageData={sendMessageData} />
      ) : (
        <SingleChat data={sendMessageData} />
      )}
    </>
  );
};

export default Message;
