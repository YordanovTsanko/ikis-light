import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <section className="relative text-white text-center flex items-center justify-center py-16 px-6 sm:px-12 h-[500px]">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
        >
          <source src="/ikis_light_short.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 bg-gray-700 opacity-90 rounded-lg max-w-[80%] p-5 pb-9">
          <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
            Революция в осветителния дизайн
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Открийте нашата иновативна платформа, предназначена за архитекти,
            инженери, интериорни дизайнери и крайни потребители, за лесно
            намиране на перфектните осветителни решения с AI помощ за визуално
            търсене и персонализирани препоръки.
          </p>
          <a
            href="#catalog"
            className="bg-white text-gray-700  py-2 px-4 rounded-lg font-semibold"
          >
            Изследвайте каталога
          </a>
        </div>
      </section>
      <section id="features" className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary drop-shadow-md mb-4">
                AI Търсене
              </h4>
              <p className="text-gray-600 drop-shadow-sm">
                Визуално търсене, задвижвано от AI, което помага лесно да
                откриете перфектните осветителни тела за вашите нужди.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary drop-shadow-md mb-4">
                Персонализирани Препоръки
              </h4>
              <p className="text-gray-600 drop-shadow-sm">
                Персонализирани препоръки за осветление, които са съобразени с
                вашия проект и предпочитания, за да осигурят най-доброто
                решение.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary drop-shadow-md mb-4">
                Богат Каталог
              </h4>
              <p className="text-gray-600 drop-shadow-sm">
                Достъп до разнообразен и богат каталог от осветителни продукти
                от водещи марки, подходящи за всякакъв стил и тип проект.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Нашите услуги
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Освен че предлагаме най-добрите осветителни решения, ние осигуряваме
            професионални услуги, които да помогнат да реализирате вашето
            виждане. От персонализирани консултации за дизайн до инсталация и
            поддръжка, ние предлагаме пълен набор от услуги за всеки проект.
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
