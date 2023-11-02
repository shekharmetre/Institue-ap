import React, { Fragment, useCallback, useEffect, useState } from "react";
import Chats from "./Chats";
import Message from "./Message";
import {
  AiFillCaretLeft,
  AiFillLeftCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import axios from "axios";
import { useSocket } from "../../../utils/context/SocketProvider";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
const Mychat = () => {
  const [slectedusers, setSlectedusers] = useState([]);
  const [groupname, setGroupname] = useState("");
  const [chat, setChat] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [users_data, setUsersData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [datas, setDatas] = useState([]);
  const [singleUser, setSingleUser] = useState("");
  const [chatOPtion, setChatOption] = useState(false);
  const user = useSocket();
  const [sending, setSending] = useState("");
  const selectingusers = (data) => {
    const updatedusers = [...slectedusers, data];
    setSlectedusers(updatedusers);
  }; // selectin users list

  const fetchChats = async () => {
    const response = await axios.post(
      "https://computer-insititute.onrender.com/api/socket/allchats",
      { loggeduser: user.user }
    );
    setDatas(response?.data);
  };

  const creatingAgroupChat = async () => {
    const users = JSON.stringify(slectedusers.map((obj) => obj._id));
    try {
      if (user.user) {
        const response = await axios.post(
          "https://computer-insititute.onrender.com/api/socket/group",
          { loggeduser: user.user, adduserId: users, chatName: groupname }
        );
      }
    } catch (error) {
      console.log("please check therf eis wroing");
      console.log(error);
    }
  };

  useEffect(() => {
    searchingdata();
  }, [inputValue]);
  useEffect(() => {
    setSending(datas[chat]);
    if (singleUser) {
      setSending(singleUser);
    }
  }, [singleUser, chat]);

  useEffect(() => {
   fetchChats()
  });



  const searchingdata = async () => {
    if (user) {
      const allUsers = await axios.get(
        `https://computer-insititute.onrender.com/api/socket/chat?search=${inputValue}`
      );
      setUsersData(allUsers.data);
    }
  };

  const creaetingOneOnechat = async (item) => {
    // console.log(user.user, item);
    console.log(item);
    if (!user.user || !item) {
      console.error("Invalid user or item");
      return;
    }

    try {
      const response = await axios.post(
        "https://computer-insititute.onrender.com/api/socket/accesschat",
        {
          loggeduser: user.user,
          userId: item._id,
        }
      );
      console.log("One-on-one chat created:", response.data);
    } catch (error) {
      console.error("Error creating one-on-one chat:", error);
    }
  };

  const DeleteSlecteduser = (userIndex) => {
    // Create a copy of the current selected users array
    const updatedArray = [...slectedusers];

    // Remove the element at userIndex
    updatedArray.splice(userIndex, 1);

    // Update the state with the modified array
    setSlectedusers(updatedArray);
  }; // this is the important

  const sendingMessage = (index) => {
    setSending(index);
    setChatOption((prev) => !prev);
  };



  const handleREsponsive = () => {
    setChatOption((prev) => !prev);
    setSending(null);
  };

  

  return (
    <div className="flex md:gap-5 md:px-10 px-5 py-2 relative">
      <div
        className={`md:inline-flex  shadows flex-col md:w-1/3 bg-white ${
          chatOPtion ? "hidden" : "h-[500px]"
        } md:h-[520px] px-5 p-2 m-2 rounded-md `}
        style={{ backgroundImage: "url('https://i.gifer.com/HcHY.gif')" }}
      >
        <div className="flex gap-2  justify-between items-center p-5">
          <h1 className="md:text-2xl -translate-x-5 text-xl opacity-50">
            My Chats
          </h1>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            New Group Chat +
          </button>
        </div>
        <div className="flex flex-col gap-5 overflow-x-scroll">
          {datas && datas?.length >= 1 ? (
            datas?.map((item, index) => (
              <div
                className="cursor-pointer shadow-blue-600 shadow-md"
                key={index}
                onClick={() => sendingMessage(index)}
              >
                <Chats sentChat={item} />
              </div>
            ))
          ) : (
            <p className="text-blue-600 text-2xl md:mt-5">No chat available</p>
          )}
        </div>
      </div>
      {/* one one user */}
      <button
        className={`btn-primary absolute top-14 p-2 rounded-md ${
          chatOPtion ? "" : "hidden"
        }`}
        onClick={handleREsponsive}
      >
        back
      </button>
      <dialog
        id="my_modal_1"
        className="modal max-h-screen md:mt-0 mt-14 overflow-y-scroll grid place-content-start bg-white max-w-xs p-5"
      >
        <div className="modal-action">
          <form method="dialog">
            <h2 className="text-2xl -translate-y-8 -translate-x-5">
              Search Users
            </h2>
            <div className="flex md:gap-5 gap-3">
              <input
                type="text"
                placeholder="enter name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-2 md:p-2 rounded-md "
              />
              <button className="btn">go</button>
            </div>
            <div className="flex gap-2 mt-2 max-w-[260px] overflow-x-scroll"></div>
            {Loading ? (
              <div>Loading....</div>
            ) : (
              <div className="">
                {users_data &&
                  Array.isArray(users_data) &&
                  users_data?.map((item, index) => (
                    <button
                      className="bg-slate-100 cursor-pointer p-2 flex gap-2 items-center capitalize mt-5 rounded-xl btn"
                      key={index}
                      onClick={() => creaetingOneOnechat(item)}
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
                    </button>
                  ))}
              </div>
            )}
          </form>
        </div>
      </dialog>
      {/* one one user */}
      {/* group user */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg" onClick={creaetingOneOnechat}>
            Create Group Chat
          </h3>
          <form method="dialog" className="flex flex-col justify-end">
            <div className="mt-5 flex flex-col gap-5">
              <input
                type="text"
                placeholder="enter group name"
                className="w-full border-2 p-2"
                value={groupname}
                onChange={(e) => setGroupname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Add user min 2 allow"
                className="w-full border-2 p-2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-2  overflow-x-scroll">
              {slectedusers && slectedusers?.length >= 1 && (
                <div className="flex gap-2 mt-2 overflow-x-scroll">
                  {slectedusers?.map((item, index) => (
                    <p
                      className="cursor-pointer bg-blue-400 text-[10px] p-1 rounded-md flex items-center gap-2 whitespace-nowrap overflow-eclipse"
                      key={index}
                    >
                      {item.name}
                      <span
                        className="hover:scale-150 hover:text-white"
                        onClick={() => DeleteSlecteduser(index)}
                      >
                        <AiOutlineDelete />
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="max-h-40 mt-5 overflow-y-scroll">
              {users_data &&
                users_data?.map((item, index) => (
                  <div
                    className="bg-slate-100 cursor-pointer p-2 flex gap-2 items-center capitalize mt-5 rounded-xl"
                    key={index}
                    onClick={() => selectingusers(item)}
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
              className="btn w-fit self-end mt-2"
              onClick={creatingAgroupChat}
            >
              Create chat
            </button>
          </form>
        </div>
      </dialog>
      <Message
        sendMessageData={
          sending !== null && sending !== undefined && !isNaN(sending)
            ? sending === 0
              ? datas[0]
              : datas[sending]
            : sending
        }
      />
    </div>
  );
};

export default Mychat;
