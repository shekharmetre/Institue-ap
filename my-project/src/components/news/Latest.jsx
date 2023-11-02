import React from "react";
// import News from "../shared/News";
import { blogs } from "../../../utils/data/data";
import ContentWrapper from "../shared/ContentWrapper";
import { BsArrowRight } from "react-icons/bs";

const Latest = () => {
  return (
    <>
      <h2 className="text-center text-blue-800 font-bold text-md">
        NEWS & BLOGS
      </h2>
      <h1 className="text-center text-2xl font-bold tracking-wide mb-5">
        Latest News & Blogs
      </h1>
      <div className="main grid md:grid-cols-3 grid-cols-1 w-full h-full md:px-36 gap-4 overflow-hidden mt-10">
        {blogs.map((item, index) => (
          <div
            className={`${
              item?.claass
            } flex md:gap-5 gap-2 shadow-sm shadow-black bg-white rounded-md ${
              item.claass === "second" && "md:flex-col"
            }`}
            key={index}
          >
            <div className="w-[80%] md:h-56">
              <img
                src={item.image}
                alt="date"
                className="object-cover md:w-full md:h-full rounded-md"
              />
            </div>
            <div className="flex flex-col md:p-5">
              <div className="flex  md:gap-5 items-center">
                <img src={item.iconc} className="w-8" />
                <p className="md:text-xl text-sm text-black opacity-70 text-end">
                  Septembar 26, 2023
                </p>
              </div>
              <p className="md:text-2xl text-md md:tracking-wide mt-1 font-bold text-black">
                {item.title ||
                  "News Feature Enhance Virtual Teacing & Learning"}
              </p>
              <p className="text-blue-800 flex gap-5 items-center md:mt-5">
                Read More
                <span>
                  <BsArrowRight />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Latest;
