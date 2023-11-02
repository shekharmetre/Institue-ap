import React from "react";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header className="relative h-[100px] bg-style" style={{background:"#181D3D"}}>
        <div className="w-full h-5 opacity-80 "></div>
        <div className=" w-full  opacity-90 md:p-2 md:px-5  flex justify-between items-center outline-none border-none">
          <div className="flex items-center gap-2">
            <AiOutlineSearch className="text-3xl" onClick={() => document.getElementById("my_modal_1").showModal()} />
            <input
              type="text"
              placeholder="Search User"
              className="md:block hidden w-full text-xl bg-transparent cursor-pointer outline-none border-none placeholder:text-white p-2 placeholder:font-semibold tooltip tooltip-success" title="search all user" onClick={() => document.getElementById("my_modal_1").showModal()}
            />
          </div>
          <h1 className="text-2xl text-white font-bold">User ChatBoard</h1>
          <div className="flex items-center text-white gap-5">
            <AiFillBell className="text-3xl" />
            <button className="btn -translate-x-4">Logout</button>
          </div>
        </div>
     
      </header>
    </>
  );
};

export default Header;
