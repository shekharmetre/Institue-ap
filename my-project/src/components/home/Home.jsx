import React, { useState } from "react";
import logo from "../../assets/deletebg/logo.png";
import "./style.css";
import Menu from '../../assets/menu.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineMenuFold,
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { Header } from "../../../utils/data/data";
import Dropdown from "../shared/Dropdown";
import Profile from "../profile/Profile";

import { dahsboard } from "../../../utils/dashboard";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slice/UserSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [Usernotfound, setUserfound] = useState(false);

  const handleMouseEnter = (itemName) => {
    setActiveItem(itemName);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };
  return (
    <header className="flex items-center px-2 py-2 sticky top-0 bg-slate-200 z-50 md:gap-5">
      <img src={Menu} alt="" title="Sidebar" className="cursor-pointer font-bold w-6" onClick={() => setOpen((prev) => !prev)} />
      {/* sidebar */}
      {open && (
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Main
                  </div>
                </div>
              </li>
              <li >
                <Link
                  to={`/dashboard/dashboard`}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/dashboard/board`}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Board
                  </span>
                  <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                    New
                  </span>
                </Link>
              </li>
              <li >
                <Link
                  to={`/dashboard/messages`}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Messages
                  </span>
                </Link>
              </li>
              <li >
                <Link
                  to={`/dashboard/notification`}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Notifications
                  </span>
                  <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                    1.2k
                  </span>
                </Link>
              </li>
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center mt-5 h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Settings
                  </div>
                </div>
              </li>
              <li >
                <Link
                  to={`/dashboard/profile`}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </Link>
              </li>
              <li >
                <Link
                  to={`/dashboard/settings`}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
              Copyright @2021
            </p>
          </div>
        </div>
      )}

      {/* sidebar */}
      <div className="md:hidden drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="tooltip tooltip-right  drawer-button tetxt-2xl text-black"
          >
            {/* <AiOutlineMenu /> */}
          </label>
        </div>
        <div className="drawer-side z-50 h-[100vh]">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu z-50 text-base-content">
            {/* component */}
            <div className="flex flex-col top-14 -left-0 w-[72px] hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
              <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                  {dahsboard.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/dashboard/${item.name.toLowerCase()}`}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4 text-whites">
                          <img src={item.image} className="w-10" alt="not" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* end componne */}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-14 md:gap-10">
        <div className="flex items-center">
          <img
            src={logo}
            alt=""
            className="w-[50px] h-[30px] object-cover md:w-[80px]"
          />
          <p className="text-black leading-4 font-bold md:w-10">
            Patel Institute
          </p>
        </div>
        <div className="flex ">
          <div
            className="hidden md:inline-flex items-center cursor-pointer w-[80px] border-2 h-[40px] border-primary p-2 "
            onClick={() => setDropdown((prev) => !prev)}
          >
            courses
            <div
              className={`absolute dropdown top-20 left-40 w-full ${
                dropdown ? "" : "hidden"
              }`}
            >
              <Dropdown />
            </div>
          </div>
          {/* search and button */}
          <div className="flex">
            <input
              type="text"
              placeholder="search Course...."
              className="border-2 w-40 md:w-full p-2 text-[14px] border-primary font-semibold"
            />
            <div className="bg-primary p-3">
              <AiOutlineSearch className="" />
            </div>
          </div>
        </div>
      </div>
      {/* user mobile responsive */}
      <div className="flex ml-3 md:ml-0 gap-1 items-center md:hidden text-2xl">
        <AiOutlineUser onClick={() => setUserfound((prev) => !prev)} />
        {Usernotfound && (
          <div className="absolute top-12 right-6 shadow-2xl rounded-xl">
            <Profile />
          </div>
        )}
      </div>
      <div className=" hidden justify-between md:inline-flex gap-10 header items-center cursor-pointer">
        {Header.map((item, index) => (
          <div
            key={index}
            id={item.name}
            className=" items-center hidden md:inline-flex  w-full gap-2 relative"
            onClick={() => handleMouseEnter(item.name)}
          >
            <p>{item.name}</p>
            <p>{item.icon}</p>
            <div
              className={`absolute top-10 text-sm ${
                activeItem === item.name ? "" : "hidden"
              }`}
              onMouseLeave={handleMouseLeave}
            >
              <Dropdown />
            </div>
          </div>
        ))}

        <div className="flex text-2xl gap-5 relative">
          <AiOutlineShopping />
          <AiOutlineUser onClick={() => setUserfound((prev) => !prev)} />
          {Usernotfound && (
            <div className="absolute top-10">
              <Profile />
            </div>
          )}
        </div>
        <button className="btn btn-primary ml-10">Get in Touch </button>
      </div>
    </header>
  );
};

export default Home;
