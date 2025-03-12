import React from "react";
import { FaLightbulb } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <FaLightbulb size={78} className="text-primary mx-auto mb-2" />
        <h3 className="text-xl xl:text-3xl font-semibold text-gray-900 mb-6 ">
          Имаш още въпроси или нужда от помощ?
        </h3>
        <p className="text-md xl:text-lg text-gray-600 leading-relaxed mb-12">
          Нашият екип от експерти е винаги готов да ви помогне с всякакви
          въпроси относно нашите продукти и услуги. Независимо дали имате нужда
          от подробности, технически консултации или просто искате да обсъдите
          вашите осветителни нужди, ние сме тук, за да ви осигурим професионална
          и приятелска поддръжка.
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
