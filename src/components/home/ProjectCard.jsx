import React from 'react';

// ProjectCard component with image and title
const ProjectCard = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg shadow-lg hover:scale-105 cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 sm:h-44 object-cover rounded-t-lg" />
      <h4 className="p-2 text-center drop-shadow-md">{title}</h4>
    </div>
  );
};

export default ProjectCard;
