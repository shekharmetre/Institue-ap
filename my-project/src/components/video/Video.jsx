// import Image from "next/image";
import React from "react";
// import video from "@/public/jpegimages/video.webp";
import video from "../../assets/jpegimages/video.webp";

// import play from "@/public/newimages/media.svg";
import play from "../../assets/newimages/media.svg";

const Video = () => {
  return (
    <div className="mt-10 relative">
      <img
        src={video}
        height={200}
        alt="no"
        className="w-full h-[300px] md:h-[350px] object-cover"
      />
      <div className="absolute top-[20%] left-[20%] md:left-[40%] md:top-[30%]">
        <div className="flex flex-col items-center gap-5">
          <img
            src={play}
            width={80}
            height={80}
            alt="no"
            className=" bg-white  bg-opacity-40 backdrop-blur-md rounded-full p-2 "
          />
          <div>
          <p className="text-center text-white text-2xl font-bold ">
            Our Most Popular Services
          </p>
          <p className="text-center text-white text-2xl font-bold">Watching Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
