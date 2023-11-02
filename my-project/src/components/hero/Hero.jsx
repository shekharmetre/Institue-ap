import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigatoion = useNavigate()
  return (
    <div className="relative">
      <div>
        <img
          src="https://images.unsplash.com/photo-1695237115264-1ba2ed594c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          alt=""
          className="w-full md:h-[70vh] h-[40vh]"
        />
      </div>
      <div className="hero-content text-center md:w-[70%] absolute md:top-20 md:left-40 top-10">
        <div>
          <p className="md:text-xl font-bold">The Leader in Offline Learning</p>
          <p className="text-xl md:text-5xl font-bold tracking-wider mt-3">
            Join The Millions Learning To New Things From Us
          </p>
          <p className="mt-2 text-[12px]  font-semibold  hidden md:block">
            Denouncing Pleasure and paraising pain was born and will give you
            great explorer{" "}
          </p>
          <button className="btn btn-primary mt-5 text-[12px]" onClick={()=>navigatoion('/chat')}>
            chat App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
