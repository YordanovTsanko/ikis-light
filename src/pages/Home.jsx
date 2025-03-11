import React from "react";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesSection from "../components/home/ServicesSection";
import Banner from "../components/home/Banner";
import Projects from "../components/home/Projects";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Banner />
      <Products />
      <FeaturesSection />
      <Projects />
      <ServicesSection />
    </div>
  );
};

export default Home;
