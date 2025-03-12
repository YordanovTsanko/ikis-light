import React from "react";
import SubscribeForm from "./SubcribeForm";

const features = [
  {
    title: "AI Търсене",
    description:
      "Визуално търсене, задвижвано от AI, което помага лесно да откриете перфектните осветителни тела за вашите нужди.",
    banner: "/1BannerB.png",
  },
  {
    title: "Персонализирани Препоръки",
    description:
      "Персонализирани препоръки за осветление, които са съобразени с вашия проект и предпочитания, за да осигурят най-доброто решение.",
    banner: "/2BannerB.jpg",
    left: true,
  },
  {
    title: "Абонирай се",
    description:
      "Абонирай се и научи за отстъпки и оферти ексклузивно от IKIS Light.",
    banner: "/3BannerB.png",
    field: true,
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-gray-100 py-16 px-6 sm:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        {features.map((feature, index) => (
          <div key={index}>
            {/* Large Screen Layout */}
            <div className="hidden lg:block relative">
              <div
                className={`p-6 shadow-md flex flex-col justify-center h-[200px] relative ${
                  feature.left ? "items-start" : "items-end"
                }`}
              >
                <div className="absolute inset-0 z-10">
                  <img
                    src={feature.banner}
                    alt="Banner"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-20 max-w-md flex flex-col items-start text-start p-5">
                  <img
                    src="/logo192.png"
                    className="absolute right-0 h-10 w-auto"
                    alt="Logo"
                  />
                  <h4 className="text-lg xl:text-2xl font-bold text-primary drop-shadow-md mb-3">
                    {feature.title}
                  </h4>
                  <p
                    className={`${
                      feature.left ? "text-black" : "text-gray-600"
                    } drop-shadow-sm text-sm xl:text-[15px]`}
                  >
                    {feature.description}
                  </p>
                  {feature.field && <SubscribeForm />}
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden shadow-md">
              <img
                src={feature.banner}
                alt="Banner"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-bold text-primary mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  {feature.description}
                </p>
                {feature.field && (
                  <div className="mt-4">
                    <SubscribeForm />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
