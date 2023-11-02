import React from "react";
import { useSocket } from "../../../utils/context/SocketProvider";

const SingleChat = ({ data }) => {
  const user = useSocket()
  const notuser = data && data?.users.find((item) => item._id !== user.user);
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-5 items-center">
          <img src={notuser?.pic} alt="" className="w-40" />
          <p>{notuser?.name}</p>
          <p>{notuser?.email}</p>
        </div>
      </div>
    </dialog>
  );
};

export default SingleChat;
