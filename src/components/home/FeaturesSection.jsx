import React from "react";

const features = [
  {
    title: "AI Търсене",
    description:
      "Визуално търсене, задвижвано от AI, което помага лесно да откриете перфектните осветителни тела за вашите нужди.",
  },
  {
    title: "Персонализирани Препоръки",
    description:
      "Персонализирани препоръки за осветление, които са съобразени с вашия проект и предпочитания, за да осигурят най-доброто решение.",
  },
  {
    title: "Богат Каталог",
    description:
      "Достъп до разнообразен и богат каталог от осветителни продукти от водещи марки, подходящи за всякакъв стил и тип проект.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-gray-100 py-16 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 h-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md h-auto flex flex-col justify-start items-center"
          >
            <h4 className="text-lg xl:text-xl font-bold text-primary drop-shadow-md mb-3">
              {feature.title}
            </h4>
            <p className="text-gray-600 drop-shadow-sm text-sm xl:text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
