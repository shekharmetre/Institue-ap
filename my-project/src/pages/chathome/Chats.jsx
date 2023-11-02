import React from 'react'
import { useSocket } from '../../../utils/context/SocketProvider'

const Chats = ({sentChat}) => {
  const user = useSocket()
  // console.log(sentChat)
  const notuser = sentChat.users.find((item) => item._id !== user.user);
  return (
    <div className="bg-slate-300 rounded-lg p-2">
      <p>{sentChat && sentChat.isGroup && sentChat?.chatName}</p>
      <p>{sentChat && sentChat.isGroup === false && notuser.name}</p>
      <div className="flex items-center gap-2">
        <p className="text-[10px] font-bold">{sentChat?.chatName ? "group chat" : "chat"} :</p>
        <p className="text-[12px] opacity-80 font-sans">
          {sentChat ? "No Message Yet" : ""}
        </p>
      </div>
    </div>
  )
}

export default Chats



