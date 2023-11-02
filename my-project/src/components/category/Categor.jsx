import React from "react";
import ContentWrapper from "../shared/ContentWrapper";
import { PopularCategory } from "../../../utils/data/data";
import { useNavigate } from "react-router-dom";

const Categor = () => {
  const navigation = useNavigate()
  const titles = PopularCategory.map((category) => category.title[0].title);
  return ( 
    <ContentWrapper>
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-sm tracking-tighter mt-5 font-bold">TOP CATEGORIES</h2>
          <h1 className="text-black font-bold text-xl md:text-2xl mt-2 md:mt-5">
            Browse Popular Category
          </h1>
        </div>
        <button className="btn btn-primary hidden md:block" onClick={()=>navigation('/courses')}>All Categories</button>
        <button className="btn btn-primary"onClick={()=>navigation('/courses')} >View all</button>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4  mt-10">
        {PopularCategory.map((item, index) => (
            <div className="relative" key={index}>
              <img src={item.image} className="opacity-95 rounded-md w-full md:h-[350px] object-cover" />
              <div className="absolute  text-white  bottom-2 left-6 md:left-[80px] md:bottom-6">
                <h1 className="text-md md:text-xl  font-bold ">{item.title[0].title}</h1>
                <div className="flex items-center gap-5 text-center text-md">
                  <p className="">{item.title[0].course}</p>
                  <p className="text-xl">{item.title[0].icon}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Categor;
