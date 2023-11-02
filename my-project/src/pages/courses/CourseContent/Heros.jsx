import React, { useEffect, useState } from "react";
import WrapperContent from "../WrapperContent";
import { TitleCOurse, courseTtile } from "../../../../utils/data/data";

const Heros = () => {
  const data = [
    {
      title: "Online Courses",
    },
    {
      title: "Offline Courses",
    },
    {
      title: "Self paced Courses",
    },
  ];
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (selected === 0) {
      setSelected("offline");
    }
    if (selected === 1) {
      setSelected("online");
    }
    if (selected === 2) {
      setSelected("self");
    }
  }, [selected]);

  console.log(typeof selected, selected);

  return (
    <>
      <div className="px-5 py-14" style={{ background: "#F8F9FD" }}>
        <h2 className="font-bold text-2xl text-center">
          Best IT Courses in India to Upgrade Your Skills and Career
        </h2>
        <p className="text-center mt-3">
          Home / <span className="text-blue-700">Our Training Programs</span>
        </p>
      </div>
      <WrapperContent>
        <div className="text-center mt-5">
          <h2 className="text-xl font-semibold">
            Explore All The Courses Offered by patel Institute
          </h2>
          <p className="mt-5 text-xl text-center">
            We offer live online training to learners all across India, and
            classroom training in Jodhpur (Rajasthan). You can also opt for our
            self-paced recorded online courses.
          </p>
        </div>
      </WrapperContent>
      <ul className="flex gap-2 w-full justify-between mt-5 selcted_course px-5">
        {data.map((item, index) => (
          <li
            key={index}
            className={`text-blue-800 after:absolute after:w-full after:h-1 after:bg-blue-400 after:-bottom-1 after:left-0 cursor-pointer ${
              isNaN(selected) ? "" : "bg-blue-800"
            }`}
            onClick={() => setSelected(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="px-6 mt-10 flex flex-col md:grid md:grid-cols-3 md:gap-8  gap-5">
        {TitleCOurse[isNaN(selected) && selected]?.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl">
            <img
              src={item.image}
              alt=""
              className="rounded-xl w-full md:hover:scale-110 duration-1000 cursor-pointer object-cover"
            />
            <div className="py-5 px-3">
              <h2 className="font-bold text-2xl">{item.header2}</h2>
              <p className="text-start">{item.paragraph}</p>
              <ol className="mt-3 flex flex-col gap-1">
                <li className="text-md font-medium">{item.li1}</li>
                <li className="text-md font-medium">{item.li2}</li>
                <li className="text-md font-medium">{item.li3}</li>
              </ol>
              <p className="flex items-center font-bold text-blue-700 gap-5 py-4">
                {item.button} <span>{item.icon}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Heros;
