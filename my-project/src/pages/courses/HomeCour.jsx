import React from "react";
import Course from "./Course";
import { courseTtile } from "../../../utils/data/data";
import Design from "./Design";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../components/shared/ContentWrapper";

const HomeCour = () => {
  const navigation = useNavigate();
  return (
    <ContentWrapper>
    <div className="px-5 p-2 flex flex-col md:flex">
      <img
        src="https://ourstartupindia.com/wp-content/uploads/2022/10/Computer-Institute-Franchise-Opportunities-930x600.png"
        alt=""
        className="h-full w-full rounded-md"
      />
      <div className="flex justify-center items-center flex-col gap-2">
        <p className="flex gap-3 font-sans mt-5 text-xl">
          Success-oriented learning!{" "}
          <span>
            <img src="https://www.wscubetech.com/images/hand-img.svg" alt="" />
          </span>
        </p>
        <h2 className="font-bold md:text-4xl text-2xl">
          Fueling SKills,Igniting Careers
        </h2>
        <p className="px-5 text-center">
          Master industry-relevant skills with our vernacular online courses.
          Choose your program, get certified, and open doors to lucrative career
          opportunities.
        </p>
        <div className="flex gap-5 mt-3">
          <button
            className="btn btn-primary"
            onClick={() => navigation("/courses/training")}
          >
            Explore Coureses
          </button>
          <button className="btn">Book Free Class</button>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-2xl text-center mb-5">
            Build Your Career, Your Way
          </h2>
          <p className="w-full  text-center mb-5">
            Choose from live and offline Courses,classroom training,or
            self-paced online programs
          </p>
          <div className="flex flex-col md:flex-row md:gap-10 gap-5">
            {courseTtile.map((item, index) => (
              <div className="shadow-black shadow-sm rounded-xl " key={index}>
                <Course
                  imaged={item.image}
                  title={item.header}
                  paragraph={item.info}
                  buttonContent={item.button}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <img
            src="https://www.wscubetech.com/images/e-learn-center.webp"
            alt=""
          />
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-2xl">
            Patel Institute : The vercular Upskillling Edtech
          </h2>
          <p className="leading-7 font-sans text-start mt-5">
            institute Tech, a Vernacular Upskilling Edtech, develops and
            disseminates Tech-powered Career Acceleration Programs and Job
            Oriented Professional Courses curated for Job Aspirants from Tier 2,
            3 & 4 Demographics (Bharat), readying them for Global workforce
            opportunities.{" "}
          </p>
          <p className="mt-5">
            With its Tech-enabled hybrid delivery environment, the Company aims
            to disrupt Career Readiness at scale for over 100 Million Job
            Aspirants in deep demographics of “Bharat“ and set them
            competitively ready with professional hands-on skills to crack their
            dream career opportunities. Thus, WsCube Tech distinctively stands
            with the “Upskilling Bharat” Proposition.{" "}
          </p>
        </div>
      </div>
    </div>
    </ContentWrapper>
  );
};

export default HomeCour;
