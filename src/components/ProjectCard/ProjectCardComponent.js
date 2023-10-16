import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./ProjectCardComponentStyles.scss";

const ProjectCard = ({ title, description, imageUrl,url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={url}>
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
    </Link>
    
  );
};

export default ProjectCard;
