import React from 'react';
import './ExperienceCardComponentStyles.scss'
const ExperienceCard = ({title,company,description,dates}) => {
  return (
    <div className="experience-card">
      <div className="card-top">
        <h2>{company}</h2>
        <h4>{title}</h4>
        <h5>{dates}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
