import React from "react";

const Products = () => {
  const productCategories = [
    "За пенделен монтаж",
    "За стена",
    "Прожектори за шина",
    "Линейна система Smart line",
    "Индустриално осветление",
    "По индивидуален проект",
    "За вграждане",
    "Акустични осветителни тела и пана",
    "За монтаж на таван",
  ];

  return (
    <section id="services" className="py-12 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="xl:text-3xl font-semibold text-gray-900 mb-6 underline decoration-primary underline-offset-2">
          Продукти
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Нашите иновативни осветителни решения, подкрепени от AI технологии,
          осигуряват перфектното съчетание от дизайн, ефективност и
          персонализирани препоръки за всеки проект.
        </p>
        <div>
          {/* <div className="flex flex-col gap-1 max-w-lg">
            {productCategories.map((category, index) => (
              <h2 key={index} className="bg-primary rounded-lg py-2 text-white cursor-pointer border border-primary
              hover:text-primary hover:bg-white">{category}</h2>
            ))}
          </div>
          <div>
            
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
