import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Products = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const productCategories = [
    {
      title: "За пенделен монтаж",
      images: [
        { src: "/pendelenMontaj/circle.jpg", text: "Circle Light" },
        { src: "/pendelenMontaj/clay.jpg", text: "Clay Pendant" },
        { src: "/pendelenMontaj/LEGACY-LINDA-1.jpg", text: "Legacy Linda" },
        { src: "/pendelenMontaj/orbit-1.jpg", text: "Orbit Light" },
        { src: "/pendelenMontaj/TRIX-PN.png", text: "Trix Pendant" },
      ],
    },
    {
      title: "За стена",
      images: [
        { src: "/zaStena/CUBE-WALL.png", text: "Cube Wall" },
        { src: "/zaStena/MOMO-WALL.png", text: "Momo Wall" },
      ],
    },
    {
      title: "Прожектори за шина",
      images: [
        { src: "/projektorZaShina/KRON-TR.png", text: "Kron Track Light" },
        { src: "/projektorZaShina/LORY-M.png", text: "Lory Medium" },
        { src: "/projektorZaShina/LORY-S.png", text: "Lory Small" },
        { src: "/projektorZaShina/NASH-TR.png", text: "Nash Track Light" },
        { src: "/projektorZaShina/TUBE-TR.png", text: "Tube Track Light" },
      ],
    },
    {
      title: "Линейна система Smart line",
      images: [
        { src: "/lineinaSistema/LORY-copy.jpg", text: "Lory System" },
        { src: "/lineinaSistema/NASH-copy.jpg", text: "Nash System" },
        { src: "/lineinaSistema/SL-3PH-TRACK-copy-1.jpg", text: "3PH Track" },
        { src: "/lineinaSistema/SL-3R-copy.jpg", text: "3R System" },
        { src: "/lineinaSistema/SL-DAISY-copy.jpg", text: "Daisy Light" },
        { src: "/lineinaSistema/SL-LINDA-copy.jpg", text: "Linda Line" },
        { src: "/lineinaSistema/SL-LORY-copy-1.jpg", text: "Lory Line" },
        { src: "/lineinaSistema/SMART-LINE-TRUNKING-11502300-copy.jpg", text: "Smart Line Trunking" },
        { src: "/lineinaSistema/TUBE-copy.jpg", text: "Tube Line" },
      ],
    },
    {
      title: "Индустриално осветление",
      images: [
        { src: "/indistrialnoOsvetlenie/galaxy-high-bay.jpg", text: "Galaxy High Bay" },
      ],
    },
    {
      title: "По индивидуален проект",
      images: [
        { src: "/individualniProekti/image-3-Copy.jpg", text: "Custom Project" },
      ],
    },
    {
      title: "За вграждане",
      images: [
        { src: "/zaVgrajdane/CertaFlux_LED_Panel_6262_G2_BVA.jpg", text: "CertaFlux LED Panel" },
        { src: "/zaVgrajdane/CIRCLE-RCW.png", text: "Circle RCW" },
        { src: "/zaVgrajdane/CLAY-RCW.png", text: "Clay RCW" },
        { src: "/zaVgrajdane/Fortimo_LED_Panel_6262_G2_BVA.jpg", text: "Fortimo LED Panel" },
        { src: "/zaVgrajdane/lory-spot.png", text: "Lory Spot" },
        { src: "/zaVgrajdane/MOBY-RSL_FOTO.png", text: "Moby RSL" },
        { src: "/zaVgrajdane/NIA_FOTO.png", text: "Nia Light" },
        { src: "/zaVgrajdane/OFFICE-FOR-LED.png", text: "Office LED" },
        { src: "/zaVgrajdane/OFFICE-PARALLEL.png", text: "Office Parallel" },
        { src: "/zaVgrajdane/SLA-SPOT.png", text: "SLA Spot" },
        { src: "/zaVgrajdane/TETRIX-RCF_FOTO.png", text: "Tetrix RCF" },
        { src: "/zaVgrajdane/TETRIX-RCW_FOTO.png", text: "Tetrix RCW" },
      ],
    },
    {
      title: "Акустични осветителни тела и пана",
      images: [],
    },
    {
      title: "За монтаж на таван",
      images: [
        { src: "/montajTavan/CIRCLE-SF.png", text: "Circle SF" },
        { src: "/montajTavan/CLAY-SF_FOTO.png", text: "Clay SF" },
        { src: "/montajTavan/CUBE-S.png", text: "Cube S" },
        { src: "/montajTavan/OFFICE-FOR-LED-SF.png", text: "Office LED SF" },
        { src: "/montajTavan/TRIX-SF.png", text: "Trix SF" },
        { src: "/montajTavan/TUBE-L.png", text: "Tube Large" },
        { src: "/montajTavan/TUBE-S-new-1.jpg", text: "Tube Small" },
      ],
    },
  ];

  return (
    <section id="services" className="py-12 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img src="/TEST.png" alt='background' className="w-full h-full object-cover opacity-20" />
        </div>

        <h3 className="text-xl xl:text-3xl font-semibold text-gray-900 mb-6 underline decoration-primary underline-offset-2">
          Продукти
        </h3>
        <p className="text-md xl:text-lg text-gray-600 leading-relaxed mb-12">
          Нашите иновативни осветителни решения, подкрепени от AI технологии,
          осигуряват перфектното съчетание от дизайн, ефективност и
          персонализирани препоръки за всеки проект.
        </p>

        {productCategories.map((category, index) => (
          <div key={index} className="flex flex-col relative z-20">
            <button
              onClick={() => toggleCategory(index)}
              className="flex items-center justify-between bg-primary rounded-lg py-2 my-1 w-[260px] xs:w-[350px] mx-auto 
              text-white cursor-pointer border border-primary hover:text-primary hover:bg-white transition duration-300 px-2 lg:px-4"
            >
              {category.title}
              <span
                className={`transform transition-transform duration-300 ${
                  openCategory === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            <AnimatePresence>
              {openCategory === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4 max-w-[1000px] mx-auto">
                    {category.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative group">
                        <img
                          src={image.src}
                          alt={image.text}
                          className="lg:w-[250px] w-full h-[250px] rounded-lg shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg  group-hover:opacity-100 transition-opacity duration-300">
                          {image.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
