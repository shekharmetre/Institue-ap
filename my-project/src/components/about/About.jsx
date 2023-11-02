import React from "react";
import ContentWrapper from "../shared/ContentWrapper";
import "./about.css";
import { BsArrowRight } from "react-icons/bs";
// import comm from "@/public/jpegimages/communities.avif";
import comm from "../../assets/jpegimages/communities.avif";
// import user1 from "@/public/jpegimages/user-1.avif";
import user1 from "../../assets/jpegimages/user-1.avif";
// import user2 from "@/public/jpegimages/user-2.avif";
import user2 from "../../assets/jpegimages/user-2.avif";
// import user3 from "@/public/jpegimages/user-3.avif";
import user3 from "../../assets/jpegimages/user-3.avif";

const About = () => {
  return (
    <div>
      <ContentWrapper>
        <div className="md:flex gap-10 mt-20">
          <div className="left md:w-1/2">
            <p className="text-[10px] font-bold text-blue-800 mb-5">
              ABOUT OUR PATEL COMPUTER INSTITUTE
            </p>
            <h1 className="md:text-[40px] text-4xl clear-left font-bold leading-10">
              Create A Community Of Life Long Learners.
            </h1>

            <p className="mt-5 md:pr-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
              sit provident? Quas laudantium deserunt natus obcaecati ad. Iusto
              ipsum sit temporibus esse praesentium dolorem quia, quae dolore,
              eius eos alias.
            </p>
            <p className="text-xl md:text-2xl mt-2  font-semibold">
              Learn with Effectively
            </p>
            <p className="md:pr-36">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, beatae.
            </p>
            <p className="md:text-2xl text-xl mt-2  font-semibold">
              Get Achieve New Level
            </p>
            <p className="md:pr-36">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, beatae.
            </p>
            <button className="btn btn-primary my-5">
              About Us{" "}
              <span className="font-bold">
                <BsArrowRight />
              </span>
            </button>
          </div>
          <div className="right relative md:w-1/2">
            <img src={comm} className="w-full h-80  md:h-full object-cover" alt="no" />
            <div className="bg-white rounded-md backdrop-blur-md absolute bottom-5 right-20 w-fit  p-1">
              <div className="flex gap-20">
                <div className="flex relative">
                  <img
                    src={user2}
                    width={50}
                    height="full"
                    className="rounded-full absolute left-8"
                    alt="new"
                  />
                  <img
                    src={user1}
                    width={50}
                    height="full"
                    className="rounded-full absolute left-14"
                    alt="new"
                  />
                  <img
                    src={user1}
                    width={50}
                    height="full"
                    className="rounded-full"
                    alt="new"
                  />
                </div>
                <div className="flex flex-col items-center">
                <h1 className="font-bold">1.289</h1>
                <p className="text-sm opacity-70 font-medium">Our Remote Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
