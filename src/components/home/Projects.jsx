import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    { title: "Офиси", image: "/office_1.jpg" },
    { title: "Търговски", image: "/2.jpg" },
    { title: "Хотели", image: "/hotels_3.jpg" },
    { title: "Домове", image: "/homes_4.jpg" },
    { title: "Други", image: "/others_5.jpg" },
  ];

  return (
    <section id="services" className="py-12 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="xl:text-3xl font-semibold text-gray-900 mb-6 underline decoration-primary underline-offset-2">
          Проекти
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          IKIS Light създава персонализирани осветителни решения за всяко бизнес
          пространство – от офис и магазин до фитнес, ресторант или хотел, като
          гарантира максимална ефективност и стил.
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {projectData.map((e, index) => (
            <ProjectCard key={index} title={e.title} image={e.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
