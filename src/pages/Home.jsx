import React from "react";
import FeaturesSection from "../components/home/FeaturesSection";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <section className="relative text-white text-center flex h-[500px] lg:h-auto items-center justify-center px-2 lg:py-16 lg:px-6 sm:px-12 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
        >
          <source src="/ikis_light_short.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 bg-gray-700 opacity-90 rounded-lg lg:max-w-[80%] p-5 pb-9">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
            Революция в осветителния дизайн
          </h2>
          <p className="text-sm sm:text-md md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Открийте нашата иновативна платформа, предназначена за архитекти,
            инженери, интериорни дизайнери и крайни потребители, за лесно
            намиране на перфектните осветителни решения с AI помощ за визуално
            търсене и персонализирани препоръки.
          </p>
          <button className="bg-white text-gray-700 hover:scale-105 py-2 px-4 rounded-lg font-semibold">
            Научете повече
          </button>
        </div>
      </section>
      <FeaturesSection />

      {/* Services Section */}
      <section id="services" className="py-12 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="xl:text-3xl font-semibold text-gray-900 mb-6">
            Нашите услуги
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Предлагаме най-съвременни осветителни решения и предоставяме
            професионални услуги, които ще ви помогнат да осъществите вашите
            идеи. От индивидуални консултации за дизайн до инсталация и
            последваща поддръжка, осигуряваме цялостно обслужване за всеки етап
            от проекта.
          </p>
          <a
            href="#contact"
            className="bg-primary shadow-lg text-white hover:bg-gray-700 py-2 px-4 rounded-lg font-semibold"
          >
            Свържете се с нас
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
