import { BsEyeFill, BsSendFill } from "react-icons/bs";

import axios from "axios";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSocket } from "../../../utils/context/SocketProvider";

const GroupChat = ({sendMessageData}) => {
  const [chatName, setChatName] = useState();
  const [inputValue, setInputValue] = useState("");
  const [users_data, setUsersData] = useState([]);
  const [admin, setadming] = useState(false);
  const user = useSocket();
  // searcher user
  useEffect(() => {
    searchingdata();
  }, [inputValue]);

  useEffect(() => {
    if (
      sendMessageData &&
      sendMessageData?.isGroup &&
      sendMessageData?.groupAdmin?._id === user.user
    ) {
      setadming(true);
      // console.log('group adming your are')
    }
  }, [sendMessageData]);

  const searchingdata = async () => {
    const allUsers = await axios.get(
      `https://computer-insititute.onrender.com/api/socket/chat?search=${inputValue}`
    );
    setUsersData(allUsers.data);
  }; // this is the searching all data

  useEffect(() => {
    const updateGroupName = async () => {
      const data = await axios.put("https://computer-insititute.onrender.com/api/socket/group", {
        chatId: sendMessageData?._id,
        chatName: chatName,
      });
    };
    updateGroupName();
  }, [chatName]);

  const addingUserOnGroup = async (user) => {
    if (admin) {
      const users = await axios.put(
        "https://computer-insititute.onrender.com/api/socket/groupadd",
        {
          chatId: sendMessageData?._id,
          userId: user._id,
        }
      );
    }
  };


  const removeFromGroup = async (data) => {
    if (admin) {
      const reponse = await axios.put(
        "https://computer-insititute.onrender.com/api/socket/groupremove",
        { chatId: sendMessageData._id, userId: data?._id }
      );
    }
  };

  const RemoveGroup = async () => {
    const reponse = await axios.delete(
      `https://computer-insititute.onrender.com/api/socket/group/delete/${sendMessageData?._id}`
    );
  };

  return (
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">
        Update Chat/{sendMessageData?.chatName}
      </h3>
      <div className="flex overflow-scroll min-w-[200px]">
        {sendMessageData?.users?.map((item, index) => (
          <p
            key={index}
            className="flex items-center gap-1 max-h-9 bg-blue-400 px-2 text-white rounded-2xl"
          >
            {item.name}{" "}
            <span className="text-sm hover:text-black hover:scale-150 cursor-pointer">
              <AiFillDelete onClick={() => removeFromGroup(item)} />
            </span>
          </p>
        ))}
      </div>
      <form method="dialog" className="flex flex-col justify-end">
        <div className="flex items-center mt-5 gap-2">
          <input
            type="text"
            placeholder="Updated Name"
            className="border-2 w-full p-2 rounded-md"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
          />
          <button className="btn bg-blue-400">Update</button>
        </div>
        <input
          type="text"
          placeholder="Add to update"
          className="w-full border-2 p-2 outline-none mt-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="max-h-40 mt-5 w-full overflow-y-scroll self-start">
          {users_data &&
            users_data?.map((item, index) => (
              <div
                className="btn w-full  bg-slate-100 cursor-pointer p-2 flex gap-2 items-center capitalize mt-5 rounded-xl"
                key={index}
                onClick={() => addingUserOnGroup(item)}
              >
                <img
                  src={
                    item.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU"
                  }
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="flex flex-col items-start">
                  <p>{item.name}</p>
                  <p className="text-[10px] flex whitespace-nowrap overflow-ellipsis w-48">
                    <strong className="text-[10px] ">Email : </strong>{" "}
                    {item.email}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <button
          className="btn w-fit self-end mt-2 bg-red-800 text-white"
          onClick={RemoveGroup}
        >
          Leave Group
        </button>
      </form>
    </div>
  </dialog>
  )
}

export default GroupChat