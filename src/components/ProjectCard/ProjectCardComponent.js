import React, { useState } from "react";
import "./ProjectCardComponentStyles.scss";

const ProjectCard = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-top">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-card-bottom">
        <h3>{title}</h3>
        {isHovered && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
