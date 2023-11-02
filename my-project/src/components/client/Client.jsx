import React from "react";
import ContentWrapper from "../shared/ContentWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import star from "../../assets/portfolio/star.svg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { clients } from "../../../utils/data/data";

const Client = () => {
  return (
    <ContentWrapper>
      <div>
      <h2 className="text-blue-800 text-sm font-medium text-center">
        OUR TESTIMONIAL
      </h2>
      <h1 className="text-center text-2xl font-bold mt-1">
        What Our Client Says
      </h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay:2500,
          disableOnInteraction:false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Autoplay,Navigation]}
        className="mySwiper my-10"
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index} >
            <div className="grid md:grid-cols-2  gap-8">
            <div className="w-full  p-10 rounded-sm m-2 bg-white" style={{boxShadow:"2px 2px 5px black"}}>
              <h1 className="text-blue-800 font-bold">{item.blueline}</h1>
              <p className="text-sm font-semibold mt-2">{item.quote}</p>
              <div className="flex mt-5 gap-5">
                <img
                  src={item.image}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full"
                  
                />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-xl font-bold text-blue-800">{item.name}</p>
                    <p className="text-[10px]">{item.character}</p>
                  </div>
                  <div className="flex gap-2">
                  {item.star.map((item,index)=> <img src={star} alt="" className="w-7" key={index} /> )}
                </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden md:block p-10 rounded-sm m-2 bg-white" style={{boxShadow:"2px 2px 5px black"}}>
              <h1 className="text-blue-800 font-bold">{item.blueline}</h1>
              <p className="text-sm font-semibold mt-2">{item.quote}</p>
              <div className="flex mt-5 gap-5">
                <img
                  src={item.image}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full"
                  
                />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-xl font-bold text-blue-800">{item.name}</p>
                    <p className="text-[10px]">{item.character}</p>
                  </div>
                  <div className="flex gap-2">
                  {item.star.map((item,index)=> <img src={star} alt="" className="w-7" key={index} /> )}
                </div>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </ContentWrapper>
  );
};

export default Client;

// {
//    <div className="carousel carousel-center w-full p-4 space-x-4  rounded-box">
//         {clientss.map((item, index) => (
//           <div id={`slide${index}`} className="carousel-item relative" key={index}>
//             <div className="p-5">
//               <div className="bg-white shadow-2xl rounded-md p-10">
//                 <div className="w-11/12 text-sm">
//                   <p className="text-blue-800 font-semibold">
//                     {item.blueline}
//                   </p>
//                 </div>
//                 <p className="mt-4">
//                  {item.quote}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex gap-2 items-center">
//                     <img
//                       src={item.image}
//                       width={60}
//                       height={60}
//                       className="rounded-full w-12 h-12 mt-4 object-cover"
//                     />
//                     <div>
//                       <p className="text-sm text-blue-800 font-bold">
//                         {item.name}
//                       </p>
//                       <span className="text-[12px] font-medium ">
//                         {item.character}
//                       </span>
//                     </div>
//                   </div>
//                   <p className="flex gap-1">
//                     {item.star.map((item,index)=>(
//                         <img src={star} width={20} height={50} alt="n" key={index} />
//                     ))}

//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a href="#slide4" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide2" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
// }
