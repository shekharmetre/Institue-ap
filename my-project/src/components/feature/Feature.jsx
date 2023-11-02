import React from "react";
import ContentWrapper from "../shared/ContentWrapper";
import Featurecomp from "../shared/Featurecomp";

const Feature = () => {
  const feature = [1,2,3,4]
  return (
    <ContentWrapper>
      <h2 className="text-[12px] font-bold text-center text-blue-600 mt-20">
        OUR COURSES LIST
      </h2>
      <h1 className="text-2xl text-center font-bold mt-3 mb-10">
        Featured Course On This Month
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
      {feature.map((item,index)=> <div className="" key={index}><Featurecomp  /></div>)}
      </div>
      
    </ContentWrapper>
  );
};

export default Feature;
