import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="xl:text-3xl font-semibold text-gray-900 mb-6  underline decoration-primary underline-offset-2">
          Нашите услуги
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Предлагаме най-съвременни осветителни решения и предоставяме
          професионални услуги, които ще ви помогнат да осъществите вашите идеи.
          От индивидуални консултации за дизайн до инсталация и последваща
          поддръжка, осигуряваме цялостно обслужване за всеки етап от проекта.
        </p>
        <a
          href="#contact"
          className="bg-primary shadow-lg text-white hover:bg-gray-700 py-2 px-4 rounded-lg font-semibold"
        >
          Свържете се с нас
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
