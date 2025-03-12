import React from "react";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesSection from "../components/home/ServicesSection";
import Banner from "../components/home/Banner";
import Projects from "../components/home/Projects";
import Products from "../components/home/Products";
import Catalog from "../components/home/Catalog";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Banner />
      <Products />
      <Projects />
      <Catalog />
      <FeaturesSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
