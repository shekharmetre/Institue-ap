import React, { useEffect, useState } from "react";
import Home from "../../components/home/Home";
import Hero from "../../components/hero/Hero";
import Categor from "../../components/category/Categor";
import About from "../../components/about/About";
import Feature from "../../components/feature/Feature";
import Quality from "../../components/quality/Quality";
import Video from "../../components/video/Video";
import Portfolio from "../../components/portfolio/Portfolio";
import Footer from "../../components/footer/Footer";
import Client from "../../components/client/Client";
import Latest from "../../components/news/Latest";
import { useLocation } from "react-router-dom";
import Dashboard from "../../components/sidebar/Dashboard";
import Activities from "../../components/sidebar/Activities";
import Clients from "../../components/sidebar/Clients";
import ContactForm from "../../components/sidebar/ContactForm";
import Social from "../../components/sidebar/Social";
import Summaries from "../../components/sidebar/Summaries";

const Homes = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const param = pathSegments[2];
  const renderComponent = () => {
    switch (param) {
      case "dashboard":
        return <Dashboard />;
      case "notification":
        return <Activities />;
      case "clients":
        return <Clients />;
      case "contactform":
        return <ContactForm />;
      case "messages":
        return <Summaries />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      {/* <Home /> */}
      {renderComponent()}
      <Categor />
      <About />
      <Feature />
      <Quality />
      <Video />
      <Portfolio />
      <Footer />
      <Client />
      <Latest />
    </>
  );
};

export default Homes;
