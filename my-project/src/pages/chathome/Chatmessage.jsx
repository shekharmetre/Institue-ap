import React,{useEffect} from "react";

import { useSocket } from "../../../utils/context/SocketProvider";


const Chatmessage = ({ messages }) => {
  const loggeduser = useSocket();
  return (
    <div>
      {Array.isArray(messages) &&
        messages?.map((item, index) => (
          <div key={index}>
            {item?.sender?._id === loggeduser.user ? (
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={item?.sender?.pic} />
                  </div>
                </div>
                <div className="chat-header">
                  {item.sender.name}
                  <time className="text-xs opacity-50"></time>
                </div>
                <div className="chat-bubble">{item.content}</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            ) : (
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={item.sender.pic} />
                  </div>
                </div>
                <div className="chat-header">
                  {item.sender.name}
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">{item.content}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Chatmessage;
