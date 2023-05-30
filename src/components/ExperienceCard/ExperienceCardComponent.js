import React from 'react';

const ExperienceCard = ({title,company,description,dates}) => {
  return (
    <div className="experience-card">
      <div className="card-top">
        <h3>{company}</h3>
        <h4>{title}</h4>
      </div>
      <div className="card-bottom">
        <p>{dates}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
