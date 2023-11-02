
import React from "react";
// imp dorteveloer from "@/public/jpegimages/developer.jpg";
import develoer from "../../assets/jpegimages/developer.jpg";

import { BsBuildings } from "react-icons/bs";
import { RiTimer2Line } from "react-icons/ri";

import { AiFillStar } from "react-icons/ai";
// import user from '@/public/jpegimages/user-1.avif'
import user from '../../assets/jpegimages/user-1.avif'


const Featurecomp = ({title,time,price,offerPrice,bigimage,users,countstar,username,beforeContent}) => {
  return (
    <div className="bg-white shadow-2xl md:h-full h-52 shadow-teal-900 w-full rounded-2xl overflow-hidden flex relative" >
      <div className={`left w-[40%] afters`} cooms={beforeContent || "Web Design"}>
        <img
          src={ bigimage || develoer}
          alt="date"
          className="h-full object-cover"
        />
      </div>
      <div className="right w-[60%] p-4 flex flex-col justify-between md:py-10">
        <div className="flex justify-between items-center">
          <p className="flex gap-2">
            {" "}
            <BsBuildings className="text-blue-800" />
            <span>2 Lessons</span>
          </p>
          <p className="flex items-center gap-2">
            <RiTimer2Line className="text-blue-700" /> {time || "1 hr 30 min"}
          </p>
        </div>
        <p className="md:text-xl text-md font-bold text-black">
          {title || "Foundation Course to Under Stand About Software"}
        </p>
        <p className="text-black font-bold md:my-2 md:mb-4">
          $ {price || "35"}.00 / <span className="opacity-50">${offerPrice || "67"}.00</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={user || users}
              width={50}
              height={50}
              alt="user"
              className="rounded-full"
            />
            <h1 className="text-sm">{"Shekhar Metre" || username}</h1>
          </div>
          <p className="flex w-20 items-center md:w-fit">
            <AiFillStar className="text-yellow-400 text:sm md:w-full md:text-xl" />
            <AiFillStar className="text-yellow-400 text:sm md:w-full md:text-xl" />
            <AiFillStar className="text-yellow-400 text:sm md:w-full md:text-xl" />
            <AiFillStar className="text-yellow-400 text:sm md:w-full md:text-xl" />
            <AiFillStar className="text-yellow-400 text:sm md:w-full md:text-xl" />{" "}
            <span className="opacity-90">({countstar || "29"})</span>
          </p>
        </div>
      </div>
    </div>

  );
};

export default Featurecomp;
